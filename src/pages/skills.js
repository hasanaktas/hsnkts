import React from 'react'
import useSwr from 'swr'
import { Grid } from '@material-ui/core'
import { MainLayout } from '../layouts'
import { SkillCard } from '../components'

const fetcher = (url) => fetch(url).then((res) => res.json())

const Skills = () => {
  const { data, error } = useSwr('/api/skills', fetcher)
  if (error) return null
  if (!data)
    return (
      <Grid container spacing={2}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <SkillCard loading />
          </Grid>
        ))}
      </Grid>
    )

  return (
    <Grid container spacing={2}>
      {data.map((item, index) => (
        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
          <SkillCard skill={item} />
        </Grid>
      ))}
    </Grid>
  )
}

Skills.layout = MainLayout

export default Skills
