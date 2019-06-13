import gql from 'graphql-tag'

import { Icon } from '~/components/Icon'
import { Translate } from '~/components/Language'
import { TextIcon } from '~/components/TextIcon'

import ICON_ARCHIVE from '~/static/icons/archive.svg?sprite'

import { ResponseStateActionsArticle } from './__generated__/ResponseStateActionsArticle'
import { StateActionsArticle } from './__generated__/StateActionsArticle'
import styles from './styles.css'

const fragments = {
  article: gql`
    fragment StateActionsArticle on Article {
      state
    }
  `,
  response: gql`
    fragment ResponseStateActionsArticle on Article {
      articleState: state
    }
  `
}

const isActive = (article: any): boolean => {
  if (article.hasOwnProperty('state')) {
    return article.state === 'active'
  }
  if (article.hasOwnProperty('articleState')) {
    return article.articleState === 'active'
  }
  return false
}

const State = ({
  article
}: {
  article: StateActionsArticle | ResponseStateActionsArticle
}) => {
  if (isActive(article)) {
    return null
  }

  return (
    <span className="state">
      <TextIcon
        icon={
          <Icon
            id={ICON_ARCHIVE.id}
            viewBox={ICON_ARCHIVE.viewBox}
            size="small"
          />
        }
        size="xs"
      >
        <Translate zh_hant="已站內隱藏" zh_hans="已站内隐藏" />
      </TextIcon>

      <style jsx>{styles}</style>
    </span>
  )
}

State.fragments = fragments

export default State
