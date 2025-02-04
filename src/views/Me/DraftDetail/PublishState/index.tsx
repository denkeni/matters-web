import draftFragments from '~/components/GQL/fragments/draft'
import { PublishStateDraftFragment } from '~/gql/graphql'

import ErrorState from './ErrorState'
import PendingState from './PendingState'
import PublishedState from './PublishedState'
import styles from './styles.css'

const PublishState = ({ draft }: { draft: PublishStateDraftFragment }) => {
  const isPending = draft.publishState === 'pending'
  const isError = draft.publishState === 'error'
  const isPublished = draft.publishState === 'published'

  if (!isPending && !isError && !isPublished) {
    return null
  }

  return (
    <section className="container">
      {isPending && <PendingState draft={draft} />}
      {isError && <ErrorState draft={draft} />}
      {isPublished && <PublishedState draft={draft} />}

      <style jsx>{styles}</style>
    </section>
  )
}

PublishState.fragments = {
  draft: draftFragments.publishState,
}

export default PublishState
