import gql from 'graphql-tag'
import _isNil from 'lodash/isNil'

import { ADD_TOAST } from '~/common/enums'
import { Button, TextIcon, Translate, useMutation } from '~/components'
import TOGGLE_BLOCK_USER from '~/components/GQL/mutations/toggleBlockUser'
import {
  ToggleBlockUserMutation,
  UnblockUserButtonUserPrivateFragment,
} from '~/gql/graphql'

interface UnblockUserButtonProps {
  user: Partial<UnblockUserButtonUserPrivateFragment>
}

const fragments = {
  user: {
    private: gql`
      fragment UnblockUserButtonUserPrivate on User {
        id
        isBlocked
      }
    `,
  },
}

export const UnblockUserButton = ({ user }: UnblockUserButtonProps) => {
  const [unblockUser] = useMutation<ToggleBlockUserMutation>(
    TOGGLE_BLOCK_USER,
    {
      variables: { id: user.id, enabled: false },
      optimisticResponse: !_isNil(user.id)
        ? {
            toggleBlockUser: {
              id: user.id,
              isBlocked: false,
              __typename: 'User',
            },
          }
        : undefined,
    }
  )

  return (
    <Button
      size={['4rem', '1.5rem']}
      textColor="red"
      textActiveColor="white"
      bgActiveColor="red"
      borderColor="red"
      onClick={async () => {
        await unblockUser()
        window.dispatchEvent(
          new CustomEvent(ADD_TOAST, {
            detail: {
              color: 'green',
              content: <Translate id="successUnblock" />,
            },
          })
        )
      }}
    >
      <TextIcon weight="md" size="xs">
        <Translate id="unblockUser" />
      </TextIcon>
    </Button>
  )
}

UnblockUserButton.fragments = fragments
