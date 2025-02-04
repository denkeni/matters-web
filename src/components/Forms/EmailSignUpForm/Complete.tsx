import { FormattedMessage } from 'react-intl'

import { redirectToTarget } from '~/common/utils'
import { Dialog, Layout } from '~/components'

const Complete = ({
  purpose,
  closeDialog,
}: {
  purpose?: 'dialog' | 'page'
  closeDialog?: () => void
}) => {
  const isInPage = purpose === 'page'

  return (
    <>
      {isInPage && (
        <Layout.Header left={<Layout.Header.Title id="register" />} />
      )}

      {closeDialog && (
        <Dialog.Header
          title="successRegister"
          closeDialog={closeDialog}
          closeTextId="close"
          mode="inner"
        />
      )}

      <Dialog.Message align="left" spacing="md">
        <h3>
          <FormattedMessage
            defaultMessage="Welcome to Matters!"
            description="src/components/Forms/EmailSignUpForm/Complete.tsx"
          />
        </h3>

        <p>
          <FormattedMessage
            defaultMessage="Now, go like the authors you support! Your Likes will become their income"
            description="src/components/Forms/EmailSignUpForm/Complete.tsx"
          />
        </p>

        <p>
          <FormattedMessage
            defaultMessage="You have created your personal creative space. Publish your first work!"
            description="src/components/Forms/EmailSignUpForm/Complete.tsx"
          />
        </p>

        <p>
          <FormattedMessage
            defaultMessage="Start creating now!"
            description="src/components/Forms/EmailSignUpForm/Complete.tsx"
          />
        </p>
      </Dialog.Message>

      <Dialog.Footer>
        <Dialog.Footer.Button
          onClick={() => {
            redirectToTarget({
              fallback: isInPage ? 'homepage' : 'current',
            })
          }}
        >
          <FormattedMessage
            defaultMessage="Enter Community"
            description="src/components/Forms/EmailSignUpForm/Complete.tsx"
          />
        </Dialog.Footer.Button>
      </Dialog.Footer>
    </>
  )
}

export default Complete
