import classNames from 'classnames'
import Link from 'next/link'

import { TEST_ID } from '~/common/enums'

import styles from './styles.css'

export interface LinkWrapperProps {
  href: string

  textActiveColor?: 'green'

  disabled?: boolean
  onClick?: () => void

  testId?: TEST_ID
}

export const LinkWrapper: React.FC<
  React.PropsWithChildren<LinkWrapperProps>
> = ({
  href,

  textActiveColor,

  disabled,
  onClick,

  testId,

  children,
}) => {
  if (disabled) {
    return <>{children}</>
  }

  const linkClasses = classNames({
    [`text-active-${textActiveColor}`]: !!textActiveColor,
  })

  return (
    <Link href={href} legacyBehavior>
      <a
        className={linkClasses}
        onClick={(e) => {
          if (onClick) {
            onClick()
            e.stopPropagation()
          }
        }}
        {...(testId ? { ['data-test-id']: testId } : {})}
      >
        {children}

        <style jsx>{styles}</style>
      </a>
    </Link>
  )
}
