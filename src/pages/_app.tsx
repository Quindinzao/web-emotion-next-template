// External libraries
import React from 'react'
import { AppProps } from 'next/app'
import { Global, ThemeProvider } from '@emotion/react'

// Styled
import { GlobalStyles } from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <Global styles={GlobalStyles} />
    </ThemeProvider>
  )
}

export default MyApp
