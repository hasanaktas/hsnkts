import React from 'react'
import { Grid, Typography, Button, Divider } from '@material-ui/core'
import { MainLayout } from '../layouts'
import DeveloperSvg from '../assets/svgs/developer.svg'
import WhatsappIcon from 'mdi-material-ui/Whatsapp'
import InstagramIcon from 'mdi-material-ui/Instagram'
import GithubIcon from 'mdi-material-ui/Github'
import { ServiceCard, Link } from '../components'
import { useLocalization } from '../localization'

export default function Index() {
  const localization = useLocalization()
  const services = localization.services
  return (
    <>
      <Grid container spacing={2}>
        <Grid item container xs={12} justify='center' spacing={1}>
          <Grid item container sm={12} md={7} spacing={1}>
            <Grid item>
              <Typography variant='h1'>{localization.about.hi}</Typography>

              <Typography variant='h2' gutterBottom>
                {localization.about.im}
              </Typography>

              <Typography variant='h4' gutterBottom color='primary'>
                {localization.about.info}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant='contained'
                color='primary'
                fullWidth
                component={Link}
                naked
                href='/skills'
              >
                {localization.about.skills}
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant='contained'
                color='secondary'
                fullWidth
                component={Link}
                naked
                href='/portfolio'
              >
                {localization.about.portfolio}
              </Button>
            </Grid>
          </Grid>
          <Grid item container sm={12} md={5} justify='center'>
            <Grid item>
              <DeveloperSvg style={{ width: 250, height: 250 }} />
            </Grid>
          </Grid>
        </Grid>

        <Grid item container xs={12} spacing={3}>
          <Grid item xs={12}>
            <Typography variant='h3' align='center' gutterBottom>
              {localization.serviceTitle}
            </Typography>
            <Divider />
          </Grid>
          {services.map((service) => (
            <Grid key={service.title} item xs={12} sm={6} md={4}>
              <ServiceCard service={service} />
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item container xs={12} spacing={2}>
          {social.map((item) => (
            <Grid key={item.title} item xs={4}>
              <Button
                startIcon={<item.icon />}
                variant='outlined'
                color='primary'
                fullWidth
                href={item.href}
              >
                {item.title}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  )
}

Index.layout = MainLayout

const social = [
  {
    title: 'Whatsapp',
    icon: () => <WhatsappIcon />,
    href: 'https://api.whatsapp.com/send?phone=+905446226393',
  },
  {
    title: 'Instagram',
    icon: () => <InstagramIcon />,
    href: 'https://www.instagram.com/hsnktas/',
  },
  {
    title: 'Github',
    icon: () => <GithubIcon />,
    href: 'https://github.com/hasanaktas/',
  },
]
