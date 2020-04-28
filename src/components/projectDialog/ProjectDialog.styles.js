import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  swiper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: theme.spacing(2),
  },
  img: {
    maxWidth: '100%',
    borderRadius: theme.shape.borderRadius,
    height: 'auto',
    maxHeight: '70vh',
  },
}))
