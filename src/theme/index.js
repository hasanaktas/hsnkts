import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import breakpoints from './breakpoints'
import palette from './palette'
import typography from './typography'
import shape from './shape'
let theme = createMuiTheme({
  palette,
  typography,
  breakpoints,
  shape,
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
      containedSecondary: {
        boxShadow: '0 4px 14px 0 rgba(0,0,0,0.1)',
        color: palette.text.primary,
        '&:hover': {
          backgroundColor: 'rgba(255,255,255,0.9)',
          boxShadow: '0 6px 20px rgba(93,93,93,0.23)',
        },
      },
    },
  },
})

theme = responsiveFontSizes(theme)

export default theme
