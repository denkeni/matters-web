import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { useContext, useEffect, useState } from 'react'

import { iscnLinkUrl, translate } from '~/common/utils'
import {
  Button,
  CopyToClipboard,
  Dialog,
  IconCopy16,
  IconExternalLink16,
  IconIPFSGreen24,
  IconISCN24,
  LanguageContext,
  Spacer,
  Spinner,
  TextIcon,
  Translate,
  useMutation,
} from '~/components'
import { GatewaysQuery, RetryEditArticleMutation } from '~/gql/graphql'

import ArticleSecret from './ArticleSecret'
import SectionCard from './SectionCard'
import styles from './styles.css'

const EDIT_ARTICLE = gql`
  mutation RetryEditArticle($id: ID!, $iscnPublish: Boolean) {
    editArticle(input: { id: $id, iscnPublish: $iscnPublish }) {
      id
      cover
      access {
        type
      }
      license
      iscnId
      drafts {
        id
        mediaHash
        publishState
        iscnPublish
      }
    }
  }
`

const GATEWAYS = gql`
  query Gateways {
    official {
      gatewayUrls @client
    }
  }
`

const FingerprintDialogContent = ({
  dataHash,
  showSecret,
  isAuthor,
  iscnId,
  iscnPublish,
  articleId,
  articleLastModified,
  pending,
  refetch,
}: {
  dataHash: string
  showSecret: boolean
  isAuthor: boolean
  iscnId: string
  iscnPublish?: boolean
  articleId?: string
  articleLastModified: string
  pending: boolean
  refetch: () => any
}) => {
  const { lang } = useContext(LanguageContext)
  const { loading, data } = useQuery<GatewaysQuery>(GATEWAYS)

  const gateways = data?.official.gatewayUrls || []

  const [editArticle, { loading: retryPublishing }] =
    useMutation<RetryEditArticleMutation>(EDIT_ARTICLE)

  const [timeCooling, setTimeCooling] = useState(false)
  let timer: any = null
  const pooling = (startedAt: number) => {
    if (!startedAt) return
    const POOLING_PERIOD = 30e3
    if (Date.now() - startedAt < POOLING_PERIOD) {
      setTimeCooling(true)
      timer = setTimeout(function loop() {
        if (iscnId || Date.now() - startedAt >= POOLING_PERIOD) {
          setTimeCooling(false)
          timer = null
        } else {
          refetch()
          timer = setTimeout(loop, 5e3)
        }
      }, 5e3)
    }
  }
  useEffect(() => {
    if (iscnId || !articleLastModified) return

    pooling(Date.parse(articleLastModified))

    return () => {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
    }
  })

  return (
    <Dialog.Content hasGrow>
      <section className="container">
        <SectionCard
          title={
            <TextIcon
              icon={<IconIPFSGreen24 size="md" />}
              spacing="xtight"
              size="xl"
            >
              IPFS
            </TextIcon>
          }
          description={
            <Translate
              zh_hant="去中心化內容存儲網絡"
              zh_hans="去中心化內容存儲網絡"
              en="Decentralized Content Storage Network"
            />
          }
        >
          <Spacer size="xtight" />
          <hr />
          <Spacer size="base" />

          {/* gateways */}
          <section className="gateways">
            <h4 className="title">
              <Translate
                zh_hans="公共节点"
                zh_hant="公共節點"
                en="Public Gateways"
              />
            </h4>

            <p className="description">
              <Translate
                zh_hans="內容分佈節點，可以複製以下地址對作品進行傳播"
                zh_hant="內容分佈節點，可以複製以下地址對作品進行傳播"
                en="you may access via a decentralized gateway"
              />
            </p>

            <ul>
              {(!data || loading) && <Spinner />}

              {gateways.slice(0, 4).map((url) => {
                const gatewayUrl = url.replace(':hash', dataHash)
                const hostname = url.replace(
                  /(https:\/\/|\/ipfs\/|:hash.?)/g,
                  ''
                )

                return (
                  <li key={url}>
                    <a
                      href={gatewayUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="gateway-url"
                    >
                      {hostname}
                      <IconExternalLink16 />
                    </a>
                  </li>
                )
              })}
            </ul>
          </section>

          {/* secret */}
          {showSecret && articleId && <ArticleSecret id={articleId} />}

          <Spacer size="base" />
          <hr />
          <Spacer size="base" />

          {/* hash */}
          <section className="hash">
            <h4 className="title">
              <Translate id="articleFingerprint" />
            </h4>

            <p className="description">
              <Translate
                zh_hant="使用 IPFS 生成的作品指紋，通過它可在節點調取內容"
                zh_hans="使用 IPFS 生成的作品指紋，通過它可在節點調取內容"
                en="The Fingerprint from IPFS, you can read it via a gateway"
              />
            </p>

            <section className="copy">
              <input
                type="text"
                value={dataHash || translate({ id: 'waitingForHash', lang })}
                readOnly
                onClick={(event) => event.currentTarget.select()}
              />
              <CopyToClipboard text={dataHash}>
                <Button aria-label={translate({ id: 'copy', lang })}>
                  <IconCopy16 />
                </Button>
              </CopyToClipboard>
            </section>
          </section>
        </SectionCard>

        {/* iscnId */}
        {iscnPublish && (isAuthor || iscnId) && !timeCooling && (
          <SectionCard
            title={
              <TextIcon
                icon={<IconISCN24 size="md" />}
                size="xl"
                spacing="xtight"
              >
                ISCN
              </TextIcon>
            }
            description={
              iscnId ? (
                <Translate
                  zh_hant="已在 LikeCoin 鏈上註冊的元數據"
                  zh_hans="已在 LikeCoin 鏈上註冊的元數據"
                  en="The metadata registered on LikeCoin chain"
                />
              ) : (
                <Translate
                  zh_hant="ISCN 寫入未成功"
                  zh_hans="ISCN 寫入未成功"
                  en="ISCN is failed to register on LikeCoin chain"
                />
              )
            }
            warning={!iscnId}
            right={
              iscnId ? (
                <a href={iscnLinkUrl(iscnId)} target="_blank" rel="noreferrer">
                  <IconExternalLink16 color="grey-darker" />
                </a>
              ) : isAuthor ? (
                <Button
                  spacing={[0, 'xtight']}
                  size={[null, '1.5rem']}
                  bgColor="green"
                  textColor="white"
                  aria-label={translate({ id: 'retry', lang })}
                  disabled={!pending && (timeCooling || retryPublishing)}
                  onClick={() => {
                    editArticle({
                      variables: {
                        id: articleId,
                        iscnPublish: true,
                      },
                    })
                    setTimeCooling(true)
                    pooling(Date.now())
                  }}
                >
                  <TextIcon size="sm-s">
                    {timeCooling ? (
                      <Translate id="publishing2" />
                    ) : retryPublishing ? (
                      <Translate id="retrying" />
                    ) : (
                      <Translate id="retry" />
                    )}
                  </TextIcon>
                </Button>
              ) : (
                <></>
              )
            }
          />
        )}

        <style jsx>{styles}</style>
      </section>
    </Dialog.Content>
  )
}

export default FingerprintDialogContent
