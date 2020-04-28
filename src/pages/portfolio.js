import React, { useState } from 'react'
import useSwr from 'swr'
import { Grid } from '@material-ui/core'
import { ProjectCard, ProjectDialog } from '../components'
import { MainLayout } from '../layouts'

const fetcher = (url) => fetch(url).then((res) => res.json())

const Portfolio = () => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const { data, error } = useSwr('/api/projects', fetcher)

  const SelectToProject = (project) => {
    setSelectedProject(project)
    setDialogOpen(true)
  }

  if (error) return null
  if (!data)
    return (
      <Grid container spacing={4}>
        {[1, 2, 3, 4, 5, 6].map((project, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <ProjectCard loading />
          </Grid>
        ))}
      </Grid>
    )

  return (
    <>
      <Grid container spacing={4}>
        {data.map((project, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <ProjectCard
              project={project}
              onClick={() => SelectToProject(project)}
            />
          </Grid>
        ))}
      </Grid>
      <ProjectDialog
        open={dialogOpen}
        project={selectedProject}
        onClose={() => setDialogOpen(false)}
      />
    </>
  )
}

Portfolio.layout = MainLayout

export default Portfolio
