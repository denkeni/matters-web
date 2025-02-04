import { toPath } from '~/common/utils'
import { Form, Head, Layout, Spacer, Translate, useRoute } from '~/components'

const Settings = () => {
  const { getQuery } = useRoute()
  const name = getQuery('name')

  return (
    <Layout.Main smBgColor="grey-lighter">
      <Layout.Header
        left={<Layout.Header.BackButton />}
        right={<Layout.Header.Title id="manageCircle" />}
      />

      <Head title={{ id: 'manageCircle' }} />

      <Form.List groupName={<Translate id="settings" />}>
        <Form.List.Item
          title={<Translate id="basicProfile" />}
          {...toPath({ page: 'circleEditProfile', circle: { name } })}
          role="link"
        />
      </Form.List>

      <Form.List
        groupName={
          <Translate zh_hant="免費資格" zh_hans="免费资格" en="Free Trial" />
        }
      >
        <Form.List.Item
          title={<Translate id="manageCircleInvitation" />}
          {...toPath({ page: 'circleManageInvitation', circle: { name } })}
          role="link"
        />
      </Form.List>

      <Spacer size="xxxloose" />
    </Layout.Main>
  )
}

export default Settings
