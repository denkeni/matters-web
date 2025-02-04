import React from 'react'

import { toPath } from '~/common/utils'
import {
  Card,
  DateTime,
  IconRead16,
  LinkWrapper,
  TextIcon,
  Tooltip,
  Translate,
} from '~/components'
import { CircleContentAnalyticsArticleFragment } from '~/gql/graphql'

import { fragments } from './gql'
import styles from './styles.css'

interface CircleAnalyticsContentProps {
  article: CircleContentAnalyticsArticleFragment
  count: number
  index: number
}

const Count = ({ count }: { count: number }) => {
  return (
    <Tooltip content={<Translate id="readCount" />} trigger="click">
      <button type="button" className="count">
        <TextIcon icon={<IconRead16 />} size="xs" color="grey-dark">
          {count}
        </TextIcon>
        <style jsx>{styles}</style>
      </button>
    </Tooltip>
  )
}

const ContentDigest = ({
  article,
  count,
  index,
}: CircleAnalyticsContentProps) => {
  const { title, createdAt } = article
  const path = toPath({
    page: 'articleDetail',
    article,
  })
  return (
    <Card {...path} spacing={[0, 0]}>
      <section className="container">
        <section className="number">{index + 1}</section>

        <section className="article">
          <section className="content">
            <section className="title-wrap">
              <LinkWrapper {...path} textActiveColor="green">
                <h3 className="title">{title}</h3>
              </LinkWrapper>
            </section>

            <Count count={count} />
          </section>

          <DateTime date={createdAt} />
        </section>
      </section>
      <style jsx>{styles}</style>
    </Card>
  )
}

ContentDigest.fragments = fragments

export default ContentDigest
