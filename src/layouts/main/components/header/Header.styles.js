import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: 'rgba(255,255,255,0.5)',
    backdropFilter: 'blur(4px)',
  },

  toolBar: {
    padding: 0,
    minHeight: 60,
  },

  navigationRoot: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
  },
}))
