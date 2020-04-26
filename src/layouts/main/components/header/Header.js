import React from 'react'
import { Toolbar, Container, AppBar, Hidden } from '@material-ui/core'
import { useRouter } from 'next/router'
import Logo from '../../../../assets/svgs/hasanaktas.svg'
import { useStyles } from './Header.styles'
import { LanguageSelect, Navigation } from './components'

const Header = () => {
  const classes = useStyles()
  const router = useRouter()

  return (
    <AppBar
      className={classes.appBar}
      color='inherit'
      elevation={0}
      position='sticky'
    >
      <Container maxWidth='xl'>
        <Toolbar className={classes.toolBar}>
          <Logo />
          <div className={classes.navigationRoot}>
            <Hidden smDown>
              <Navigation />
            </Hidden>
          </div>
          <LanguageSelect />
        </Toolbar>

        <Hidden mdUp>
          <Navigation />
        </Hidden>
      </Container>
    </AppBar>
  )
}

export default Header
