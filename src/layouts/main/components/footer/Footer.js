import React from 'react'
import { Typography } from '@material-ui/core'
import { Link } from '../../../../components'
import { useStyles } from './Footer.styles'
import { useLocalization } from '../../../../localization'
const Footer = () => {
  const classes = useStyles()
  const localization = useLocalization()
  return (
    <footer className={classes.footer}>
      <Typography variant='h6' align='center' gutterBottom>
        {localization.footer.title}
      </Typography>
      <Typography variant='body2' color='textSecondary' align='center'>
        {localization.footer.copyright}
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
