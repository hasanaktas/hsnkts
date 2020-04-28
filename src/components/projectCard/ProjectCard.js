import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Button,
  Typography,
} from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import { useLocalization } from '../../localization'
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  cardMedia: {
    width: '80%',
    marginLeft: '10%',
    marginTop: '10%',
    objectFit: 'cover',
    height: 0,
    paddingBottom: '50.25%',
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
}))

const ProjectCard = (props) => {
  const { project, loading, onClick } = props
  const localization = useLocalization()
  const classes = useStyles()
  return (
    <Card className={classes.root} elevation={8} onClick={onClick}>
      <CardActionArea className={classes.root}>
        {loading ? (
          <Skeleton
            animation='wave'
            className={classes.cardMedia}
            variant='rect'
          />
        ) : (
          <CardMedia className={classes.cardMedia} image={project.icon} />
        )}
        <CardContent className={classes.content}>
          {loading ? (
            <Skeleton animation='wave' variant='text' />
          ) : (
            <Typography variant='h4'>{project.title}</Typography>
          )}
          {loading ? (
            <Skeleton animation='wave' variant='text' />
          ) : (
            <Typography color='textSecondary'>
              {localization.language === 'Türkçe'
                ? project.content.tr
                : project.content.en}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ProjectCard
