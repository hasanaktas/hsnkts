import React, { useEffect, useState } from 'react'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import Skeleton from '@material-ui/lab/Skeleton'
import Slider from '@material-ui/core/Slider'
import { useStyles, useSliderStyles } from './SkillCard.styles'

const SkillCard = (props) => {
  const { skill } = props
  const [show, setShow] = useState(false)
  const styles = useStyles()
  const sliderStyles = useSliderStyles()

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 500)
  }, [])
  return (
    <Card elevation={8}>
      <CardActionArea className={styles.card}>
        <Box>
          {!show ? (
            <>
              <Skeleton
                className={styles.heading}
                width='60%'
                animation='wave'
              />
              <Skeleton
                className={styles.subheader}
                width='30%'
                animation='wave'
              />
              <Box display={'flex'} alignItems={'center'}>
                <Skeleton width='90%' animation='wave' />
                <Skeleton
                  className={styles.value}
                  width='10%'
                  animation='wave'
                />
              </Box>
            </>
          ) : (
            <>
              <h3 className={styles.heading}>{skill.title}</h3>
              <p className={styles.subheader}>{skill.company}</p>
              <Box display={'flex'} alignItems={'center'}>
                <Slider classes={sliderStyles} value={skill.value} />
                <span className={styles.value}>{`%${skill.value}`}</span>
              </Box>
            </>
          )}
        </Box>
      </CardActionArea>
    </Card>
  )
}

export default SkillCard
