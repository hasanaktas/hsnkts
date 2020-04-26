import React from 'react'
import clsx from 'clsx'
import Link from './Navigation.Link'
import { useRouter } from 'next/router'
import { useStyles } from './Navigation.styles'
import { useLocalization } from '../../../../../../localization'
const Navigation = () => {
  const classes = useStyles()
  const router = useRouter()
  const localization = useLocalization()
  const isTR = localization.language === 'Türkçe'

  const routes = [
    {
      title: isTR ? 'Hakkımda' : 'About',
      href: '/',
    },

    {
      title: isTR ? 'Yeteneklerim' : 'My Skills',
      href: '/skills',
    },

    {
      title: isTR ? 'Portfolyo' : 'Portfolio',
      href: '/portfolio',
    },
  ]

  return (
    <div className={classes.navigation}>
      {routes.map((item) => {
        return (
          <Link
            key={item.href}
            className={clsx(
              classes.linkDefault,
              router.pathname == item.href && classes.linkActive
            )}
            href={item.href}
          >
            {item.title}
          </Link>
        )
      })}
    </div>
  )
}

export default Navigation
