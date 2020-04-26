import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 400,
      sm: 600,
      md: 800,
      lg: 1000,
      xl: 1200,
    },
  },
  typography: {
    fontFamily: 'Ubuntu, Arial',
  },
  palette: {
    primary: {
      main: '#0070F3',
    },
    secondary: {
      main: 'rgb(212, 0, 255)',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    divider: '#EAEAEA',
  },
})

export default theme
