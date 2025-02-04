import gql from 'graphql-tag'

import { CircleDigest } from '~/components/CircleDigest'
import { NoticeCircleCardFragment } from '~/gql/graphql'

import styles from './styles.css'

const NoticeCircleCard = ({
  circle,
}: {
  circle: NoticeCircleCardFragment | null
}) => {
  if (!circle) {
    return null
  }

  return (
    <section className="sub-content">
      <CircleDigest.Rich
        bgColor="grey-lighter"
        borderRadius="xtight"
        circle={circle}
        hasFooter
        hasOwner
        hasPrice
      />
      <style jsx>{styles}</style>
    </section>
  )
}

NoticeCircleCard.fragments = {
  circle: gql`
    fragment NoticeCircleCard on Circle {
      id
      ...DigestRichCirclePublic
    }
    ${CircleDigest.Rich.fragments.circle.public}
  `,
}

export default NoticeCircleCard
