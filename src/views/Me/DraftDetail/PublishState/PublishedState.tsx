import Link from 'next/link'
import { useContext } from 'react'

import { Icon, TextIcon, Toast, Translate } from '~/components'
import { ViewerContext } from '~/components/Viewer'

import { toPath } from '~/common/utils'

const PublishedState = () => {
  const viewer = useContext(ViewerContext)
  const path = toPath({
    page: 'userProfile',
    userName: viewer.userName || ''
  })

  return (
    <Toast.Instance
      color="green"
      header={<Translate zh_hant="作品已發佈" zh_hans="作品已发布" />}
      customButton={
        <Link {...path}>
          <a>
            <TextIcon
              icon={<Icon.Right size="xs" color="white" />}
              textPlacement="left"
            >
              <Translate zh_hant="查看我的作品" zh_hans="查看我的作品" />
            </TextIcon>
          </a>
        </Link>
      }
    />
  )
}

export default PublishedState
