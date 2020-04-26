import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import ProTip from '../components/ProTip'
import Link from '../components/Link'
import Copyright from '../components/Copyright'
import { MainLayout } from '../layouts'
import { useDispatchLocalization, useLocalization } from '../localization'
export default function About() {
  const localization = useLocalization()
  return (
    <Container maxWidth='sm'>
      <Box my={4}>
        <Typography variant='h4' component='h1' gutterBottom>
          {localization.home}
        </Typography>
        <Button variant='contained' color='primary'>
          Go to the main page
        </Button>
        <Button color='primary'>Go to the main page</Button>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  )
}

About.layout = MainLayout
