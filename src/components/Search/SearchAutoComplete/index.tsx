import { useLazyQuery } from '@apollo/react-hooks'
import classNames from 'classnames'
import gql from 'graphql-tag'
import { Fragment, useEffect } from 'react'

import { toPath } from '~/common/utils'
import { Menu, Spinner } from '~/components'
import { SearchAutoCompleteQuery } from '~/gql/graphql'

import FallbackSearchItem from './FallbackSearchItem'
import styles from './styles.css'

interface SearchAutoCompleteProps {
  searchKey: string
  inPage?: boolean
}

const SEARCH_AUTOCOMPLETE = gql`
  query SearchAutoComplete($searchKey: String) {
    frequentSearch(input: { first: 7, key: $searchKey })
  }
`

export const SearchAutoComplete = (props: SearchAutoCompleteProps) => {
  const { searchKey, inPage } = props
  const [getAutoComplete, { data, loading }] =
    useLazyQuery<SearchAutoCompleteQuery>(SEARCH_AUTOCOMPLETE, {
      variables: { searchKey },
    })
  const frequentSearch = data?.frequentSearch || []
  const showFrequentSearch = frequentSearch.length > 0

  const itemClasses = classNames({
    key: true,
    inPage,
  })

  useEffect(() => {
    getAutoComplete()
  }, [searchKey])

  if (loading) {
    return (
      <Menu width={inPage ? undefined : 'md'}>
        <Spinner />
      </Menu>
    )
  }

  if (!showFrequentSearch) {
    return (
      <Menu width={inPage ? undefined : 'md'}>
        <FallbackSearchItem {...props} />
      </Menu>
    )
  }

  return (
    <Menu width={inPage ? undefined : 'md'}>
      <FallbackSearchItem {...props} />

      {frequentSearch.map((key, i) => (
        <Fragment key={key}>
          <Menu.Divider />
          <Menu.Item
            {...toPath({
              page: 'search',
              q: key,
            })}
            is="link"
          >
            <span className={itemClasses}>{key}</span>
          </Menu.Item>
        </Fragment>
      ))}

      <style jsx>{styles}</style>
    </Menu>
  )
}
