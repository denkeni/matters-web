import gql from 'graphql-tag'

import { ArticleTagNoticeFragment } from '~/gql/graphql'

import ArticleTagAddedNotice from './ArticleTagAddedNotice'
import ArticleTagRemovedNotice from './ArticleTagRemovedNotice'
import ArticleTagUnselectedNotice from './ArticleTagUnselectedNotice'

const ArticleTagNotice = ({ notice }: { notice: ArticleTagNoticeFragment }) => {
  switch (notice.articleTagNoticeType) {
    case 'ArticleTagAdded':
      return <ArticleTagAddedNotice notice={notice} />
    case 'ArticleTagRemoved':
      return <ArticleTagRemovedNotice notice={notice} />
    case 'ArticleTagUnselected':
      return <ArticleTagUnselectedNotice notice={notice} />
    default:
      return null
  }
}

ArticleTagNotice.fragments = {
  notice: gql`
    fragment ArticleTagNotice on ArticleTagNotice {
      id
      unread
      __typename
      articleTagNoticeType: type
      ...ArticleTagAddedNotice
      ...ArticleTagRemovedNotice
      ...ArticleTagUnselectedNotice
    }
    ${ArticleTagAddedNotice.fragments.notice}
    ${ArticleTagRemovedNotice.fragments.notice}
    ${ArticleTagUnselectedNotice.fragments.notice}
  `,
}

export default ArticleTagNotice
