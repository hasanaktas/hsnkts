import React from 'react'
import { Grid } from '@material-ui/core'
import { MainLayout } from '../layouts'
import { SkillCard } from '../components'

export default function Index() {
  return (
    <Grid container spacing={2}>
      {mySkills.map((item, index) => (
        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
          <SkillCard skill={item} />
        </Grid>
      ))}
    </Grid>
  )
}

Index.layout = MainLayout

const mySkills = [
  {
    title: 'Html 5',
    company: '-',
    value: 90,
  },
  {
    title: 'Css 3',
    company: '-',
    value: 90,
  },
  {
    title: 'Sass',
    company: '-',
    value: 90,
  },
  {
    title: 'Javascript',
    company: '-',
    value: 85,
  },
  {
    title: 'React JS',
    company: 'Facebook',
    value: 85,
  },
  {
    title: 'React Native',
    company: 'Facebook',
    value: 80,
  },
  {
    title: 'Next Js',
    company: 'Vercel',
    value: 80,
  },
  {
    title: 'Styled Components',
    company: 'Glen Maddern',
    value: 85,
  },
  {
    title: 'Material UI',
    company: 'Google mui-org',
    value: 95,
  },
  {
    title: 'Ant Design',
    company: 'XTech',
    value: 80,
  },
  {
    title: 'Node JS',
    company: 'Ryan Dahl',
    value: 50,
  },
  {
    title: 'Rest Api',
    company: '-',
    value: 85,
  },
  {
    title: 'GraphQL',
    company: 'Facebook',
    value: 80,
  },
  {
    title: 'Cloud Platform',
    company: 'Google',
    value: 70,
  },
  {
    title: 'Firebase',
    company: 'Google',
    value: 85,
  },
  {
    title: 'Photoshop',
    company: 'Adobe',
    value: 80,
  },
  {
    title: 'Illustrator',
    company: 'Adobe',
    value: 75,
  },
  {
    title: 'Substance Painter',
    company: 'Adobe',
    value: 60,
  },
  {
    title: 'XD',
    company: 'Adobe',
    value: 95,
  },
  {
    title: '3ds Max',
    company: 'Autodesk',
    value: 60,
  },
]
