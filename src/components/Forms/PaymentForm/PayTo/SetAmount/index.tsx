import { useQuery } from '@apollo/react-hooks'
import { BigNumber } from '@ethersproject/bignumber'
import { useFormik } from 'formik'
import _get from 'lodash/get'
import _pickBy from 'lodash/pickBy'
import { useContext, useEffect, useRef, useState } from 'react'
import { useAccount } from 'wagmi'

import {
  PAYMENT_CURRENCY as CURRENCY,
  PAYMENT_MAXIMUM_PAYTO_AMOUNT,
} from '~/common/enums'
import {
  featureSupportedChains,
  formatAmount,
  numRound,
  validateCurrency,
  validateDonationAmount,
  WALLET_ERROR_MESSAGES,
} from '~/common/utils'
import {
  Dialog,
  Form,
  LanguageContext,
  Spacer,
  Spinner,
  Translate,
  useAllowanceUSDT,
  useApproveUSDT,
  useBalanceUSDT,
  useMutation,
  useTargetNetwork,
  ViewerContext,
} from '~/components'
import PAY_TO from '~/components/GQL/mutations/payTo'
import EXCHANGE_RATES from '~/components/GQL/queries/exchangeRates'
import WALLET_BALANCE from '~/components/GQL/queries/walletBalance'
import updateDonation from '~/components/GQL/updates/donation'
import {
  ArticleDetailPublicQuery,
  ExchangeRatesQuery,
  PayToMutation,
  UserDonationRecipientFragment,
  WalletBalanceQuery,
} from '~/gql/graphql'

import CivicLikerButton from '../CivicLikerButton'
import ReconnectButton from './ReconnectButton'
import SetAmountBalance from './SetAmountBalance'
import SetAmountHeader from './SetAmountHeader'

interface SetAmountCallbackValues {
  amount: number
  currency: CURRENCY
}

interface FormProps {
  currency: CURRENCY
  recipient: UserDonationRecipientFragment
  article: NonNullable<ArticleDetailPublicQuery['article']>
  submitCallback: (values: SetAmountCallbackValues) => void
  switchToCurrencyChoice: () => void
  switchToAddCredit: () => void
  setTabUrl: (url: string) => void
  setTx: (tx: PayToMutation['payTo']['transaction']) => void
  targetId: string
}

interface FormValues {
  amount: number
  customAmount: number
}

const AMOUNT_DEFAULT = {
  [CURRENCY.USDT]: 3.0,
  [CURRENCY.HKD]: 10,
  [CURRENCY.LIKE]: 100,
}

const AMOUNT_OPTIONS = {
  [CURRENCY.USDT]: [1.0, 3.0, 5.0, 10.0, 20.0, 35.0],
  [CURRENCY.HKD]: [5, 10, 30, 50, 100, 300],
  [CURRENCY.LIKE]: [50, 100, 150, 500, 1000, 1500],
}

const SetAmount: React.FC<FormProps> = ({
  currency,
  recipient,
  article,
  submitCallback,
  switchToCurrencyChoice,
  switchToAddCredit,
  setTabUrl,
  setTx,
  targetId,
}) => {
  const formId = 'pay-to-set-amount-form'
  const customInputRef: React.RefObject<any> | null = useRef(null)
  const isUSDT = currency === CURRENCY.USDT
  const isHKD = currency === CURRENCY.HKD
  const isLike = currency === CURRENCY.LIKE

  // contexts
  const viewer = useContext(ViewerContext)
  const quoteCurrency = viewer.settings.currency
  const { lang } = useContext(LanguageContext)

  const { address } = useAccount()
  const isConnectedAddress =
    viewer.info.ethAddress?.toLowerCase() === address?.toLowerCase()

  // TODO: support multiple networks
  const targetNetork = featureSupportedChains.curation[0]
  const { isUnsupportedNetwork, switchToTargetNetwork, isSwitchingNetwork } =
    useTargetNetwork(targetNetork)

  // states
  const [payTo] = useMutation<PayToMutation>(PAY_TO)

  const { data: exchangeRateDate, loading: exchangeRateLoading } =
    useQuery<ExchangeRatesQuery>(EXCHANGE_RATES, {
      variables: {
        from: currency,
        to: quoteCurrency,
      },
    })

  // HKD balance
  const { data, loading, error } = useQuery<WalletBalanceQuery>(
    WALLET_BALANCE,
    {
      fetchPolicy: 'network-only',
    }
  )

  // USDT balance & allowance
  const [approveConfirming, setApproveConfirming] = useState(false)
  const {
    data: allowanceData,
    refetch: refetchAllowanceData,
    isLoading: allowanceLoading,
    error: allowanceError,
  } = useAllowanceUSDT()
  const {
    data: approveData,
    isLoading: approving,
    write: approveWrite,
    error: approveError,
  } = useApproveUSDT()
  const { data: balanceUSDTData, error: balanceUSDTError } = useBalanceUSDT({})

  const allowanceUSDT = allowanceData || BigNumber.from('0')
  const balanceUSDT = parseFloat(balanceUSDTData?.formatted || '0')
  const balanceHKD = data?.viewer?.wallet.balance.HKD || 0
  const balanceLike = data?.viewer?.liker.total || 0
  const balance = isUSDT ? balanceUSDT : isHKD ? balanceHKD : balanceLike
  const maxAmount = isHKD ? PAYMENT_MAXIMUM_PAYTO_AMOUNT.HKD : Infinity
  const networkError =
    error ||
    (isUSDT && !isUnsupportedNetwork
      ? allowanceError || balanceUSDTError || approveError
      : undefined)
      ? WALLET_ERROR_MESSAGES[lang].unknown
      : ''

  // forms
  const {
    errors,
    handleBlur,
    handleSubmit,
    isValid,
    isSubmitting,
    setFieldValue,
    values,
  } = useFormik<FormValues>({
    initialValues: {
      amount: AMOUNT_DEFAULT[currency],
      customAmount: 0,
    },
    validate: ({ amount, customAmount }) =>
      _pickBy({
        amount: validateDonationAmount(customAmount || amount, balance, lang),
        currency: validateCurrency(currency, lang),
      }),
    onSubmit: async ({ amount, customAmount }, { setSubmitting }) => {
      const submitAmount = customAmount || amount
      try {
        if (currency === CURRENCY.LIKE) {
          const result = await payTo({
            variables: {
              amount: submitAmount,
              currency,
              purpose: 'donation',
              recipientId: recipient.id,
              targetId,
            },
            update: (cache) => {
              updateDonation({
                cache,
                id: article.id,
                viewer,
              })
            },
          })
          const redirectUrl = result?.data?.payTo.redirectUrl
          const transaction = result?.data?.payTo.transaction
          if (!redirectUrl || !transaction) {
            throw new Error()
          }
          setTabUrl(redirectUrl)
          setTx(transaction)
        }
        setSubmitting(false)
        submitCallback({ amount: submitAmount, currency })
      } catch (error) {
        setSubmitting(false)
      }
    },
  })

  const isBalanceInsufficient = balance < (values.customAmount || values.amount)

  const ComposedAmountInputHint = () => {
    const hkdHint = isHKD ? (
      <section>
        <Spacer />
        <Translate
          zh_hant="付款將由 Stripe 處理，讓你的支持不受地域限制"
          zh_hans="付款将由 Stripe 处理，让你的支持不受地域限制"
          en="Stripe will process your payment, so you can support the author wherever you are."
        />
      </section>
    ) : null

    const value = values.customAmount || values.amount

    if (value === 0) {
      return hkdHint
    }

    const rate = _get(exchangeRateDate, 'exchangeRates.0.rate', 0)
    const convertedTotal = formatAmount(value * rate, 2)

    return (
      <section>
        <p>
          ≈&nbsp;{quoteCurrency}&nbsp;{convertedTotal}
        </p>
        {hkdHint}
      </section>
    )
  }

  /**
   * useEffect Hooks
   */
  // go back to previous step if wallet is locked
  useEffect(() => {
    if (currency === CURRENCY.USDT && !address) {
      switchToCurrencyChoice()
    }
  }, [address])

  // USDT approval
  useEffect(() => {
    ;(async () => {
      if (approveData) {
        setApproveConfirming(true)
        await approveData.wait()
        refetchAllowanceData()
        setApproveConfirming(false)
      }
    })()
  }, [approveData])

  /**
   * Rendering
   */
  const InnerForm = (
    <Form id={formId} onSubmit={handleSubmit}>
      <SetAmountHeader
        currency={currency}
        isConnectedAddress={isConnectedAddress}
        isUnsupportedNetwork={isUnsupportedNetwork}
        targetChainName={targetNetork.name}
        switchToCurrencyChoice={switchToCurrencyChoice}
        switchToTargetNetwork={switchToTargetNetwork}
      />

      <SetAmountBalance
        currency={currency}
        balanceUSDT={balanceUSDT}
        balanceHKD={balanceHKD}
        balanceLike={balanceLike}
        isBalanceInsufficient={isBalanceInsufficient}
        switchToAddCredit={switchToAddCredit}
      />

      <Form.ComposedAmountInput
        // radio inputs
        currency={currency}
        balance={balance}
        amounts={AMOUNT_OPTIONS}
        name="amount"
        disabled={isUSDT && !isConnectedAddress}
        value={values.amount}
        error={errors.amount || networkError}
        onBlur={handleBlur}
        onChange={async (e) => {
          const value = parseInt(e.target.value, 10) || 0
          await setFieldValue('amount', value, false)
          await setFieldValue('customAmount', 0, true)
          e.target.blur()

          if (customInputRef.current) {
            customInputRef.current.value = ''
          }
        }}
        // custom input
        lang={lang}
        customAmount={{
          disabled: isUSDT && !isConnectedAddress,
          min: 0,
          max: maxAmount,
          step: isUSDT ? '0.01' : undefined,
          onBlur: handleBlur,
          onChange: async (e) => {
            let value = e.target.valueAsNumber || 0
            if (isHKD) {
              value = Math.floor(value)
            }
            if (isUSDT) {
              value = numRound(value, 2)
            }
            value = Math.abs(Math.min(value, maxAmount))

            await setFieldValue('customAmount', value, false)
            await setFieldValue('amount', 0, true)

            // correct the input value if not equal
            const $el = customInputRef.current
            const rawValue = parseFloat(e.target.value)
            if ($el && rawValue !== value) {
              $el.value = value <= 0 ? '' : value
              $el.type = 'text'
              $el.setSelectionRange($el.value.length, $el.value.length)
              $el.type = 'number'
            }
          },
          error: errors.amount,
          hint: <ComposedAmountInputHint />,
          ref: customInputRef,
        }}
      />
    </Form>
  )

  if (exchangeRateLoading || loading) {
    return <Spinner />
  }

  return (
    <>
      <Dialog.Content hasGrow>{InnerForm}</Dialog.Content>

      <Dialog.Footer>
        {!isUSDT && (
          <>
            {isLike && recipient.liker.likerId && (
              <CivicLikerButton likerId={recipient.liker.likerId} />
            )}

            {isBalanceInsufficient && isHKD ? (
              <Dialog.Footer.Button
                type="button"
                onClick={switchToAddCredit}
                form={formId}
                bgColor="green"
                textColor="white"
              >
                <Translate id="topUp" />
              </Dialog.Footer.Button>
            ) : (
              <Dialog.Footer.Button
                type="submit"
                form={formId}
                disabled={!isValid || isSubmitting || isBalanceInsufficient}
                bgColor="green"
                textColor="white"
                loading={isSubmitting}
              >
                <Translate id="nextStep" />
              </Dialog.Footer.Button>
            )}
          </>
        )}

        {isUSDT && (
          <>
            {!isConnectedAddress && <ReconnectButton />}

            {isConnectedAddress && isUnsupportedNetwork && (
              <Dialog.Footer.Button
                bgColor="green"
                textColor="white"
                onClick={switchToTargetNetwork}
                loading={isSwitchingNetwork}
              >
                <Translate
                  zh_hant="切換到 "
                  zh_hans="切换到 "
                  en="Switch to "
                />
                {targetNetork.name}
              </Dialog.Footer.Button>
            )}

            {isConnectedAddress &&
              !isUnsupportedNetwork &&
              allowanceUSDT.lte(0) && (
                <>
                  <Dialog.Footer.Button
                    bgColor="green"
                    textColor="white"
                    loading={approving || approveConfirming || allowanceLoading}
                    onClick={() => {
                      if (approveWrite) {
                        approveWrite()
                      }
                    }}
                  >
                    <Translate
                      zh_hant="首次需確認授權後繼續"
                      zh_hans="首次需确认授权后继续"
                      en="Approve to continue"
                    />
                  </Dialog.Footer.Button>
                </>
              )}

            {isConnectedAddress &&
              !isUnsupportedNetwork &&
              allowanceUSDT.gt(0) && (
                <Dialog.Footer.Button
                  type="submit"
                  form={formId}
                  disabled={!isValid || isSubmitting || isBalanceInsufficient}
                  bgColor="green"
                  textColor="white"
                  loading={isSubmitting}
                >
                  <Translate id="nextStep" />
                </Dialog.Footer.Button>
              )}
          </>
        )}
      </Dialog.Footer>
    </>
  )
}

export default SetAmount
