import React, { Fragment } from 'react'
import { Header, Footer } from './components'
import { Container } from '@material-ui/core'
import { useStyles } from './Main.styles'
import Particles from 'react-particles-js'

const MainLayout = (props) => {
  const classes = useStyles()
  const { children } = props
  return (
    <div className={classes.root}>
      <Header />
      <Particles
        className={classes.particles}
        params={{
          particles: {
            lineLinked: {
              color: '#263238',
              opacity: 0.2,
            },
            number: {
              value: 50,
            },
            size: {
              value: 1,
            },
          },
        }}
      />
      <Container className={classes.main} maxWidth='xl'>
        {children}
      </Container>

      <Footer />
    </div>
  )
}

export default MainLayout
