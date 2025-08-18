'use client'

import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { theme } from '../Styles/theme'
import { GlobalStyle } from '../Styles/GlobalStyles'
import { store } from '../Store'
import HeaderComponents from '../Components/Header/headerComponents'
import Footer from '../Components/Footer/footer'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <HeaderComponents />
        {children}
        <Footer />
      </ThemeProvider>
    </Provider>
  )
}
