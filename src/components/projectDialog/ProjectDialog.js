import React, { useState, useEffect } from 'react'
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import { useStyles } from './ProjectDialog.styles'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const ProjectDialog = (props) => {
  const { onClose, project, open } = props
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    setActiveStep(0)
  }, [project])

  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  if (!project) return null
  return (
    <Dialog onClose={onClose} open={open} fullWidth maxWidth='lg'>
      <DialogTitle>{project.title}</DialogTitle>
      <DialogContent className={classes.content}>
        <AutoPlaySwipeableViews
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {project.images.map((image, index) => (
            <div key={index} className={classes.swiper}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img className={classes.img} src={image} alt={project.title} />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </DialogContent>
    </Dialog>
  )
}

export default ProjectDialog
