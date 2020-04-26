/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import MuiLink from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  default: {
    color: theme.palette.text.secondary,
    fontSize: 16,
    fontWeight: 400,
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
    },
    '&:hover': {
      color: theme.palette.text.primary,
    },
  },
  active: {
    color: theme.palette.primary,
    fontSize: 16,
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
    },
    fontWeight: 500,
  },
}))

const NextComposed = React.forwardRef(function NextComposed(props, ref) {
  const { as, href, ...other } = props

  return (
    <NextLink href={href} as={as}>
      <a ref={ref} {...other} />
    </NextLink>
  )
})

function Link(props) {
  const { href, innerRef, ...other } = props
  const classes = useStyles()
  const router = useRouter()
  const pathname = typeof href === 'string' ? href : href.pathname
  return (
    <MuiLink
      underline='none'
      component={NextComposed}
      className={
        router.pathname === pathname ? classes.active : classes.default
      }
      ref={innerRef}
      href={href}
      {...other}
    />
  )
}

export default React.forwardRef((props, ref) => (
  <Link {...props} innerRef={ref} />
))
