import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import { MainLayout } from '../layouts'

export default function Index() {
  return (
    <Grid container spacing={2}>
      <Grid item sm={12} md={6} container>
        <Grid item xs={12}>
          <Typography variant='h1'>Merhaba,</Typography>
          <Typography variant='h2'>Ben Hasan AKTAŞ</Typography>
        </Grid>
        <Grid item xs={12}>
          <Button variant='contained' color='primary'>
            Yeteneklerim
          </Button>
        </Grid>
      </Grid>
      <Grid item sm={12} md={6}>
        Hasan
      </Grid>
    </Grid>
  )
}

Index.layout = MainLayout
