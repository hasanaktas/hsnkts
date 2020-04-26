import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import { LocalizationProvider } from '../localization'
import CssBaseline from '@material-ui/core/CssBaseline'

import theme from '../theme'
const MyApp = (props) => {
  const { Component, pageProps } = props
  const Layout = Component.layout || (({ children }) => <>{children}</>)
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider>
        <Head>
          <title>Hasan Aktas</title>
          <meta
            name='viewport'
            content='minimum-scale=1, initial-scale=1, width=device-width'
          />
        </Head>

        <Layout>
          <CssBaseline />
          <Component {...pageProps} />
        </Layout>
      </LocalizationProvider>
    </ThemeProvider>
  )
}

export default MyApp
