import classNames from 'classnames'
import { useContext } from 'react'

import { translate } from '~/common/utils'
import {
  IconCollection24,
  IconHashTag24,
  IconImage24,
  IconSettings24,
  LanguageContext,
  Layout,
  TextIcon,
  Translate,
} from '~/components'
import { SearchSelectDialog } from '~/components/Dialogs/SearchSelectDialog'
import {
  SetCollectionProps,
  SetCoverProps,
  SetTagsProps,
  ToggleAccessProps,
} from '~/components/Editor'
import { SearchSelectNode } from '~/components/Forms/SearchSelectForm'
import {
  ArticleDigestDropdownArticleFragment,
  DigestTagFragment,
  SearchExclude,
} from '~/gql/graphql'

import SetCover from '../SetCover'
import TagCustomStagingArea from '../TagCustomStagingArea'
import AccessDialog from './AccessDialog'
import styles from './styles.css'

export type BottomBarProps = {
  saving: boolean
  disabled: boolean
} & SetCoverProps &
  SetCollectionProps &
  SetTagsProps &
  ToggleAccessProps

/**
 * Editor toolbar that fixed on bottom to edit cover, tags and collection,
 * only used on mobile
 */
const BottomBar: React.FC<BottomBarProps> = ({
  cover,
  editCover,
  assets,
  refetchAssets,
  entityId,
  entityType,
  coverSaving,

  collection,
  editCollection,
  collectionSaving,

  tags,
  editTags,
  tagsSaving,

  circle,
  editAccess,
  accessSaving,
  accessType,
  license,
  canToggleCircle,

  article,
  draft,
  editSupportSetting,
  supportSettingSaving,
  onOpenSupportSetting,

  iscnPublish,
  togglePublishISCN,
  iscnPublishSaving,

  saving,
  disabled,
}) => {
  const { lang } = useContext(LanguageContext)

  const bottomBarClasses = classNames({
    'bottom-bar': true,
    'u-area-disable': disabled,
  })

  const coverProps: SetCoverProps = {
    cover,
    editCover,
    assets,
    refetchAssets,
    entityId,
    entityType,
    coverSaving,
  }
  const accessProps: ToggleAccessProps = {
    circle,
    accessType,
    license,
    editAccess,
    accessSaving,
    canToggleCircle,

    article,
    draft,
    editSupportSetting,
    supportSettingSaving,
    onOpenSupportSetting,

    iscnPublish,
    togglePublishISCN,
    iscnPublishSaving,
  }

  return (
    <section className={bottomBarClasses}>
      <Layout.FixedMain>
        <section className="content">
          <section className="inner">
            {/* Cover */}
            <SetCover.Dialog {...coverProps}>
              {({ openDialog: openSetCoverDialog }) => (
                <button
                  type="button"
                  onClick={openSetCoverDialog}
                  aria-haspopup="dialog"
                >
                  <TextIcon
                    icon={<IconImage24 size="md" />}
                    size="md-s"
                    weight="md"
                    spacing="xtight"
                  >
                    <Translate id="cover" />
                  </TextIcon>
                </button>
              )}
            </SetCover.Dialog>

            {/* Tags */}
            <SearchSelectDialog
              title="addTag"
              hint="hintAddTag"
              searchType="Tag"
              onSave={(nodes: SearchSelectNode[]) =>
                editTags(nodes as DigestTagFragment[])
              }
              nodes={tags}
              saving={tagsSaving}
              createTag
              CustomStagingArea={TagCustomStagingArea}
            >
              {({ openDialog }) => (
                <button
                  type="button"
                  onClick={openDialog}
                  aria-haspopup="dialog"
                >
                  <TextIcon
                    icon={<IconHashTag24 size="md" />}
                    size="md-s"
                    weight="md"
                    spacing="xtight"
                  >
                    <Translate id="tag" />
                  </TextIcon>
                </button>
              )}
            </SearchSelectDialog>

            {/* Collection */}
            <SearchSelectDialog
              title="collectArticle"
              hint="hintEditCollection"
              searchType="Article"
              searchExclude={SearchExclude.Blocked}
              onSave={(nodes: SearchSelectNode[]) =>
                editCollection(nodes as ArticleDigestDropdownArticleFragment[])
              }
              nodes={collection}
              saving={collectionSaving}
            >
              {({ openDialog }) => (
                <button
                  type="button"
                  onClick={openDialog}
                  aria-haspopup="dialog"
                >
                  <TextIcon
                    icon={<IconCollection24 size="md" />}
                    size="md-s"
                    weight="md"
                    spacing="xtight"
                  >
                    <Translate id="extend" />
                  </TextIcon>
                </button>
              )}
            </SearchSelectDialog>

            {/* Circle & License & Support Feedback & ISCN */}
            <AccessDialog {...accessProps}>
              {({ openDialog }) => (
                <button
                  aria-label={translate({ id: 'articleManagement', lang })}
                  aria-haspopup="dialog"
                  onClick={openDialog}
                >
                  <TextIcon
                    icon={<IconSettings24 size="md" />}
                    size="md-s"
                    weight="md"
                    spacing="xtight"
                  >
                    <Translate zh_hant="管理" zh_hans="管理" en="Manage" />
                  </TextIcon>
                </button>
              )}
            </AccessDialog>
          </section>
        </section>
      </Layout.FixedMain>

      <style jsx>{styles}</style>
    </section>
  )
}

export default BottomBar
