import { VisuallyHidden } from '@reach/visually-hidden'
import jump from 'jump.js'

import { Button, ButtonProps } from '~/components'

import styles from './styles.css'

type NavListItemProps = {
  name: React.ReactNode
  icon: React.ReactNode
  activeIcon: React.ReactNode
  active: boolean
} & ButtonProps

const NavListItem = ({
  name,
  icon,
  activeIcon,
  active,
  ...props
}: NavListItemProps) => {
  const { onClick: baseOnClick } = props
  const onClick = (event?: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (baseOnClick) {
      baseOnClick()
    }

    if (active) {
      event?.preventDefault()
      jump(document.body)
    }
  }

  return (
    <li>
      <Button
        bgActiveColor="grey-lighter"
        size={['2rem', '2rem']}
        {...props}
        onClick={onClick}
      >
        {active ? activeIcon : icon}
        <VisuallyHidden>
          <span>{name}</span>
        </VisuallyHidden>
      </Button>

      <style jsx>{styles}</style>
    </li>
  )
}

export default NavListItem
