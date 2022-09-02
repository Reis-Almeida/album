import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Header from '../components/Header'
import { GlobalStyle, theme } from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {

  const [defineTheme, setDefineTheme] = useState<boolean>(false)

  useEffect(() => {
    setDefineTheme(() => {
      const dark = JSON.parse(localStorage.getItem("Dark") || "")
  
      if(dark) {
        return true
      }else {
        return false
      }
  
    })
  }, [setDefineTheme])

  return(
    <ThemeProvider theme={theme(defineTheme)}>
      <GlobalStyle />
      <Header theme={defineTheme} setTheme={setDefineTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
