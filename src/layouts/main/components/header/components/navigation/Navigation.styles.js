import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  linkDefault: {
    color: theme.palette.text.secondary,
    fontSize: 16,

    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    },
    '&:hover': {
      color: theme.palette.text.primary,
      textDecoration: 'none',
    },
  },
  linkActive: {
    color: theme.palette.primary.main,

    textShadow: '2px 2px 10px rgba(0,118,255,0.2)',
    fontWeight: 500,
    '&:hover': {
      color: theme.palette.primary.main,
      textShadow: '2px 2px 10px rgba(0,118,255,0.4)',
    },
  },

  navigation: {
    maxWidth: 550,
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      height: 40,
      justifyContent: 'space-between',
    },
  },
}))
