import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Container } from '@material-ui/core'
import { MainLayout } from '../layouts'
import { useDispatchLocalization, useLocalization } from '../localization'
import SkillCard from '../components/SkillCard'
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 600,
    padding: 0,
    margin: '0px auto',
    backgroundSize: '50px 50px',
    backgroundPosition: '0px 0px 25px 25px',
    backgroundImage:
      'radial-gradient(rgb(215, 215, 215) 1px, transparent 1px), radial-gradient(rgb(215, 215, 215) 1px, transparent 1px)',
  },
}))

export default function Index() {
  const classes = useStyles()
  const localization = useLocalization()
  const dispatch = useDispatchLocalization()

  useEffect(() => {
    const lang = navigator.language || navigator.language
    console.log(lang)
  }, [])

  const dilDegistir = (event) =>
    dispatch({
      type: 'tr',
    })

  return (
    <Grid container spacing={2}>
      {[1, 2, 3, 4, 5, 6].map((item, index) => (
        <Grid key={item} item xs={12} sm={6} md={4} lg={3}>
          <SkillCard order={index} />
        </Grid>
      ))}
    </Grid>
  )
}

Index.layout = MainLayout
