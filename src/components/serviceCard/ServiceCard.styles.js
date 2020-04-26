import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(({ spacing, palette }) => ({
  root: {
    margin: spacing(2),
  },
  card: {
    display: 'flex',

    padding: spacing(2),

    '& > *:nth-child(1)': {
      flex: 'auto',
    },
  },
}))
