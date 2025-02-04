import React, { useContext } from 'react'

import { Head, Layout, Spacer, ViewerContext } from '~/components'

// import { redirectToLogin } from '~/common/utils'
import AnonymousSettings from '../AnonymousSettings'
import AccountSettings from './Account'
import UISettings from './UI'
import WalletSettings from './Wallet'

const Settings = () => {
  const viewer = useContext(ViewerContext)

  if (!viewer.isAuthed) {
    return <AnonymousSettings />
  }

  return (
    <Layout.Main smBgColor="grey-lighter">
      <Layout.Header
        left={<Layout.Header.BackButton />}
        right={<Layout.Header.Title id="settings" />}
      />
      <Head title={{ id: 'settings' }} />

      <UISettings />
      <AccountSettings />
      <WalletSettings />

      <Spacer size="xxxloose" />
    </Layout.Main>
  )
}

export default Settings
