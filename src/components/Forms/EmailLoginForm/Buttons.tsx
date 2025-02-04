import { FormattedMessage } from 'react-intl'

import { PATHS } from '~/common/enums'
import { appendTarget } from '~/common/utils'
import { Button, Form, TextIcon } from '~/components'

export const PasswordResetDialogButton = ({
  gotoResetPassword,
}: {
  gotoResetPassword: () => void
}) => (
  <Button
    spacing={['xtight', 0]}
    aria-haspopup="dialog"
    onClick={gotoResetPassword}
    tabIndex={-1}
  >
    <TextIcon color="green" weight="md">
      {' '}
      <FormattedMessage
        defaultMessage="Forget Password"
        description="src/components/Forms/EmailLoginForm/Buttons.tsx"
      />
    </TextIcon>
  </Button>
)

export const PasswordResetRedirectButton = () => (
  <Button spacing={['xtight', 0]} {...appendTarget(PATHS.FORGET)}>
    <TextIcon color="green" weight="md">
      <FormattedMessage
        defaultMessage="Forget Password"
        description="src/components/Forms/EmailLoginForm/Buttons.tsx"
      />
    </TextIcon>
  </Button>
)

export const EmailSignUpDialogButton = ({
  gotoEmailSignUp,
}: {
  gotoEmailSignUp: () => void
}) => (
  <Form.List spacing="xloose">
    <Form.List.Item
      title={
        <FormattedMessage
          defaultMessage="Not Registered?"
          description="src/components/Forms/EmailLoginForm/Buttons.tsx"
        />
      }
      rightText={<FormattedMessage defaultMessage="Register" description="" />}
      rightTextColor="green"
      onClick={gotoEmailSignUp}
      role="button"
    />
  </Form.List>
)
