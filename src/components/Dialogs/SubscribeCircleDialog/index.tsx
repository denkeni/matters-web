import dynamic from 'next/dynamic'
import { useContext, useEffect } from 'react'

import { OPEN_SUBSCRIBE_CIRCLE_DIALOG } from '~/common/enums'
import { analytics } from '~/common/utils'
import {
  Dialog,
  Spinner,
  useDialogSwitch,
  useEventListener,
  useStep,
  ViewerContext,
} from '~/components'

import { fragments } from './gql'
import { BaseSubscribeCircleDialogProps, Step } from './types'

type SubscribeCircleDialogProps = BaseSubscribeCircleDialogProps & {
  children?: ({ openDialog }: { openDialog: () => void }) => React.ReactNode
}

const DynamicContent = dynamic(() => import('./Content'), { loading: Spinner })

const BaseSubscribeCircleDialog = ({
  children,
  ...restProps
}: SubscribeCircleDialogProps) => {
  const viewer = useContext(ViewerContext)
  const {
    show,
    openDialog: baseOpenDialog,
    closeDialog,
  } = useDialogSwitch(true)

  const initialStep = viewer.status?.hasPaymentPassword
    ? 'subscribeCircle'
    : 'setPaymentPassword'
  const { currStep, forward, prevStep, back } = useStep<Step>(initialStep)

  const openDialog = () => {
    forward(initialStep)
    baseOpenDialog()
  }

  useEffect(() => {
    analytics.trackEvent('view_subscribe_circle_dialog', { step: currStep })
  }, [currStep])

  useEventListener(OPEN_SUBSCRIBE_CIRCLE_DIALOG, openDialog)

  return (
    <>
      {children && children({ openDialog })}

      <Dialog size="sm" isOpen={show} onDismiss={closeDialog}>
        <DynamicContent
          closeDialog={closeDialog}
          forward={forward}
          back={back}
          currStep={currStep}
          prevStep={prevStep}
          {...restProps}
        />
      </Dialog>
    </>
  )
}

export const SubscribeCircleDialog = (props: SubscribeCircleDialogProps) => {
  const Children = ({ openDialog }: { openDialog: () => void }) => {
    useEventListener(OPEN_SUBSCRIBE_CIRCLE_DIALOG, openDialog)
    return <>{props.children && props.children({ openDialog })}</>
  }

  return (
    <Dialog.Lazy mounted={<BaseSubscribeCircleDialog {...props} />}>
      {({ openDialog }) => <Children openDialog={openDialog} />}
    </Dialog.Lazy>
  )
}

SubscribeCircleDialog.fragments = fragments
