import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    backgroundColor: 'rgba(255,255,255,0.3)',
    backdropFilter: 'blur(2px)',
    padding: theme.spacing(6),
  },
}))
