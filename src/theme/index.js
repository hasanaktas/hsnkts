import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'
import palette from './palette'
import typography from './typography'
// Create a theme instance.
const theme = createMuiTheme({
  palette,
  typography,
  shape: {
    borderRadius: 8,
  },
  overrides: {
    MuiPaper: {
      elevation8: {
        boxShadow: '0 4px 14px 0 rgba(0,0,0,0.1)',
      },
    },
    MuiButton: {
      containedPrimary: {
        boxShadow: '0 4px 14px 0 rgba(0,118,255,0.39)',
        '&:hover': {
          backgroundColor: 'rgba(0,118,255,0.9)',
          boxShadow: '0 6px 20px rgba(0,118,255,0.23)',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 600,
      lg: 800,
      xl: 1000,
    },
  },
})

export default theme
