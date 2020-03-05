import classNames from 'classnames'

import { Title, Translate, ViewAllButton } from '~/components'

import { ANALYTICS_EVENTS, PATHS } from '~/common/enums'
import { analytics } from '~/common/utils'

import styles from './styles.css'

interface SidebarHeaderProps {
  type: 'icymi' | 'authors' | 'tags' | 'topics'
  rightButton?: React.ReactNode
}

const SidebarHeader = ({ type, rightButton }: SidebarHeaderProps) => {
  const pathMap = {
    icymi: false,
    topics: PATHS.TOPICS,
    authors: PATHS.AUTHORS,
    tags: PATHS.TAGS
  }
  const titleMap = {
    icymi: <Translate zh_hant="不要錯過" zh_hans="不要错过" />,
    topics: <Translate zh_hant="熱議話題" zh_hans="热议话题" />,
    authors: <Translate zh_hant="活躍作者" zh_hans="活跃作者" />,
    tags: <Translate zh_hant="找你想看的" zh_hans="找你想看的" />
  }
  const path = pathMap[type]
  const headerClass = classNames({
    [type]: type
  })
  const onClick = () => {
    analytics.trackEvent(ANALYTICS_EVENTS.DISPLAY_ALL, { type })
  }

  return (
    <header className={headerClass}>
      <Title type="nav" is="h2">
        {titleMap[type]}
      </Title>

      <section className="right">
        {rightButton}
        {path && <ViewAllButton {...path} onClick={onClick} />}
      </section>

      <style jsx>{styles}</style>
    </header>
  )
}

export default SidebarHeader
