import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles(({ spacing, palette }) => {
  return {
    card: {
      display: 'flex',
      padding: spacing(2),

      '& > *:nth-child(1)': {
        flex: 'auto',
      },
    },

    heading: {
      fontSize: 16,
      marginBottom: 0,
    },
    subheader: {
      color: palette.grey[600],
      marginTop: 0,
      marginBottom: 4,
    },
    value: {
      marginLeft: 8,
      fontSize: 14,
      color: palette.grey[500],
    },
  }
})

export const useSliderStyles = makeStyles(() => ({
  root: {
    height: 4,
  },
  rail: {
    borderRadius: 10,
    height: 4,
    backgroundColor: 'rgb(202,211,216)',
  },
  track: {
    borderRadius: 10,
    height: 4,
  },
  thumb: {
    display: 'none',
  },
}))
