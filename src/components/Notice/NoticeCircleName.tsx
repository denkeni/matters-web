import gql from 'graphql-tag'
import Link from 'next/link'

import { toPath } from '~/common/utils'
import { NoticeCircleNameFragment } from '~/gql/graphql'

const NoticeCircleName = ({
  circle,
  path,
}: {
  circle: NoticeCircleNameFragment | null
  path?: { href: string; pathname?: string }
}) => {
  if (!circle) {
    return null
  }

  const circlePath = toPath({
    page: 'circleDetail',
    circle,
  })

  return (
    <Link {...(path || circlePath)}>
      <a>{circle.displayName}</a>
    </Link>
  )
}

NoticeCircleName.fragments = {
  circle: gql`
    fragment NoticeCircleName on Circle {
      id
      name
      displayName
    }
  `,
}

export default NoticeCircleName
