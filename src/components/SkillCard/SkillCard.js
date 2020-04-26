import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import Skeleton from '@material-ui/lab/Skeleton'
import Slider from '@material-ui/core/Slider'
import { useStyles, useSliderStyles } from './SkillCard.styles'

const KanbanCard = (props) => {
  const { className, order } = props
  const [show, setShow] = useState(false)
  const styles = useStyles()
  const sliderStyles = useSliderStyles()

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 1200)
  }, [])
  return (
    <Card className={clsx(styles.card, className)} elevation={8}>
      {!show ? (
        <Box>
          <Skeleton className={styles.heading} width='60%' animation='wave' />
          <Skeleton className={styles.subheader} width='30%' animation='wave' />
          <Box display={'flex'} alignItems={'center'}>
            <Skeleton width='90%' animation='wave' />
            <Skeleton className={styles.value} width='10%' animation='wave' />
          </Box>
        </Box>
      ) : (
        <Box>
          <h3 className={styles.heading}>React</h3>
          <p className={styles.subheader}>Facebook</p>
          <Box display={'flex'} alignItems={'center'}>
            <Slider classes={sliderStyles} value={30} />
            <span className={styles.value}>3/10</span>
          </Box>
        </Box>
      )}
    </Card>
  )
}

export default KanbanCard

const hs = () => (
  <Box>
    <h3 className={styles.heading}>React</h3>
    <p className={styles.subheader}>Facebook</p>
    <Box display={'flex'} alignItems={'center'}>
      <Slider classes={sliderStyles} value={30} />
      <span className={styles.value}>3/10</span>
    </Box>
  </Box>
)
