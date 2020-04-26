import React, { useEffect, useState } from 'react'
import {
  Box,
  Card,
  CardActionArea,
  Slider,
  Typography,
} from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import { useStyles } from './ServiceCard.styles'

const ServiceCard = (props) => {
  const { service } = props
  const [show, setShow] = useState(false)
  const styles = useStyles()

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 1200)
  }, [])
  return (
    <Card elevation={8} className={styles.root}>
      <CardActionArea className={styles.card}>
        <Box>
          {!show ? (
            <>
              <Skeleton
                className={styles.heading}
                width='40%'
                animation='wave'
              />
              <Skeleton
                className={styles.subheader}
                width='100%'
                animation='wave'
              />
              <Skeleton
                className={styles.subheader}
                width='100%'
                animation='wave'
              />
              <Skeleton
                className={styles.subheader}
                width='100%'
                animation='wave'
              />
              <Skeleton
                className={styles.subheader}
                width='50%'
                animation='wave'
              />
            </>
          ) : (
            <>
              <Typography variant='h5' gutterBottom>
                {service.title}
              </Typography>
              <Typography color='textSecondary'>{service.content}</Typography>
            </>
          )}
        </Box>
      </CardActionArea>
    </Card>
  )
}

export default ServiceCard
