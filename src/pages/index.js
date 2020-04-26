import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import { MainLayout } from '../layouts'
import DeveloperSvg from '../assets/svgs/developer.svg'
import { ServiceCard, Link } from '../components'
import { useLocalization } from '../localization'
export default function Index() {
  const localization = useLocalization()

  return (
    <Grid container spacing={2}>
      <Grid item sm={12} md={6} container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h1'>{localization.about.hi}</Typography>
          <Typography variant='h2' gutterBottom>
            {localization.about.im}
          </Typography>
          <Typography variant='h4' gutterBottom color='primary'>
            {localization.about.info}
          </Typography>
        </Grid>
        <Grid item container xs={12} spacing={2}>
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
      </Grid>
      <Grid item sm={12} md={6} align='center'>
        <DeveloperSvg style={{ width: 250, height: 250 }} />
      </Grid>
      <Grid item container xs={12}>
        {services.map((service) => (
          <Grid key={service.title} item xs={12} md={6} lg={4}>
            <ServiceCard service={service} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

Index.layout = MainLayout

const services = [
  {
    title: ' Web Tasarım',
    content:
      ' Ne istediğinizi çok iyi biliyor ve beklentilerinizden fazlasını kurumsal kimliğinize uygun, şık, mobil uyumlu, dinamik, kaliteli tasarımlarla sunuyorum.',
  },
  {
    title: ' Web Geliştirme',
    content:
      'Kurum ve firmalara maliyetlerini düşürücek, zaman tasarrufu sağlayacak, yeni kazanımlar sağlayacak yazılımları hayata geçiriyorum.',
  },
  {
    title: 'Mobil Uygulama',
    content:
      ' Mobil uygulamanız ile milyonlarca kullanıcıya ulaşmak ve pazarda yerinizi almak için iletişime geçerek Android ve IOS mobil uygulama sahibi olabilirsiniz.',
  },
]
