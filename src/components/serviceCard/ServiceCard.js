import React from 'react'
import { Box, Typography } from '@material-ui/core'

import { useStyles } from './ServiceCard.styles'

const ServiceCard = (props) => {
  const { service } = props

  const styles = useStyles()

  return (
    <Box>
      <Typography variant='h5' gutterBottom>
        {service.title}
      </Typography>
      <Typography color='textSecondary'>{service.content}</Typography>
    </Box>
  )
}

export default ServiceCard
