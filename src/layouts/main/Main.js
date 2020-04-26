import React, { Fragment } from 'react'
import { Header, Footer } from './components'
import { Container } from '@material-ui/core'
import { useStyles } from './Main.styles'
const MainLayout = (props) => {
  const classes = useStyles()
  const { children } = props
  return (
    <div className={classes.root}>
      <Header />
      <Container className={classes.main} maxWidth='xl'>
        {children}
      </Container>
      <Footer />
    </div>
  )
}

export default MainLayout
