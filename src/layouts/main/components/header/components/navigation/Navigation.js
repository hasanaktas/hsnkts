import React from 'react'
import clsx from 'clsx'
import { Link } from '../../../../../../components'
import { useRouter } from 'next/router'
import { useStyles } from './Navigation.styles'
import { useLocalization } from '../../../../../../localization'
const Navigation = () => {
  const classes = useStyles()
  const router = useRouter()
  const localization = useLocalization()

  const routes = [
    {
      title: localization.navigation.about,
      href: '/',
    },

    {
      title: localization.navigation.skills,
      href: '/skills',
    },

    {
      title: localization.navigation.portfolio,
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
