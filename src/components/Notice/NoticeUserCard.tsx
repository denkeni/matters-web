import gql from 'graphql-tag'

import { UserDigest } from '~/components/UserDigest'
import { NoticeUserCardFragment } from '~/gql/graphql'

const NoticeUserCard = ({ user }: { user: NoticeUserCardFragment | null }) => {
  if (!user) {
    return null
  }

  return (
    <UserDigest.Rich
      user={user}
      spacing={['base', 'base']}
      borderRadius="xtight"
      bgColor="grey-lighter"
      hasState={false}
    />
  )
}

NoticeUserCard.fragments = {
  follower: gql`
    fragment NoticeUserCard on User {
      ...UserDigestRichUserPublic
      ...UserDigestRichUserPrivate
    }
    ${UserDigest.Rich.fragments.user.public}
    ${UserDigest.Rich.fragments.user.private}
  `,
}

export default NoticeUserCard
