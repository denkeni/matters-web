import { useState } from 'react'

import { ADD_TOAST } from '~/common/enums'
import { Button, TextIcon, Translate, useMutation } from '~/components'
import INVITE_CIRCLE from '~/components/GQL/mutations/invite'
import { InviteCircleInvitee, InviteCircleMutation } from '~/gql/graphql'

interface CircleInvitationResendProps {
  circleId: string
  freePeriod: number
  invitees: InviteCircleInvitee[]
}

/**
 * This a button component for re-invite an existed invitee.
 *
 * Usage:
 *
 * ```tsx
 *   <CircleInvitationResendButton
 *     circleId={''}
 *     freePeriod={1}
 *     invitees={[{ id: '' , email: null }]}
 *   />
 * ```
 */
const CircleInvitationResendButton = ({
  circleId,
  freePeriod,
  invitees,
}: CircleInvitationResendProps) => {
  const [disabled, setDisabled] = useState<boolean>(false)
  const [invite] = useMutation<InviteCircleMutation>(INVITE_CIRCLE)
  const resend = async () => {
    setDisabled(true)

    try {
      await invite({
        variables: {
          circleId,
          freePeriod,
          invitees,
        },
      })

      window.dispatchEvent(
        new CustomEvent(ADD_TOAST, {
          detail: {
            color: 'green',
            content: (
              <Translate
                zh_hant="邀請已送出"
                zh_hans="邀请已送出"
                en="Invitation sent"
              />
            ),
          },
        })
      )
    } catch (e) {
      console.error(e)
    } finally {
      setDisabled(false)
    }
  }

  return (
    <Button
      spacing={[0, 'base']}
      size={[null, '2rem']}
      bgColor="grey-lighter"
      onClick={() => resend()}
      disabled={disabled}
    >
      <TextIcon size="sm-s" color="black" weight="md">
        <Translate id="resend" />
      </TextIcon>
    </Button>
  )
}

export default CircleInvitationResendButton
