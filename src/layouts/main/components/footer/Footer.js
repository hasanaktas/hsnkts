import React from 'react'
import { Typography } from '@material-ui/core'
import { Link } from '../../../../components'
import { useStyles } from './Footer.styles'

const Footer = () => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Typography variant='h6' align='center' gutterBottom>
        Designed & Coded by Hasan Aktas
      </Typography>
      <Typography variant='body2' color='textSecondary' align='center'>
        {'Copyright © '}
        <Link color='inherit' href='/'>
          hsnkts.com
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </footer>
  )
}

export default Footer
