import dynamic from 'next/dynamic'

import { Dialog, Spinner, useDialogSwitch } from '~/components'

interface ResetPaymentPasswordProps {
  children: ({ openDialog }: { openDialog: () => void }) => React.ReactNode
}

const DynamicPaymentResetPasswordForm = dynamic(
  () => import('~/components/Forms/PaymentForm/ResetPassword'),
  { loading: Spinner }
)

const BaseResetPaymentPasswordDialog: React.FC<ResetPaymentPasswordProps> = ({
  children,
}) => {
  const { show, openDialog, closeDialog } = useDialogSwitch(true)

  return (
    <>
      {children({ openDialog })}

      <Dialog size="sm" isOpen={show} onDismiss={closeDialog}>
        <Dialog.Header
          title="resetPaymentPassword"
          closeDialog={closeDialog}
          closeTextId="close"
        />

        <DynamicPaymentResetPasswordForm closeDialog={closeDialog} />
      </Dialog>
    </>
  )
}

export const ResetPaymentPasswordDialog = (
  props: ResetPaymentPasswordProps
) => (
  <Dialog.Lazy mounted={<BaseResetPaymentPasswordDialog {...props} />}>
    {({ openDialog }) => <>{props.children({ openDialog })}</>}
  </Dialog.Lazy>
)
