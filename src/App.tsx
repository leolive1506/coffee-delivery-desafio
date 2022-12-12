import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import { CoffeesContextProvider } from './context/CoffeesContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import 'react-toastify/dist/ReactToastify.css'
import { PaymentContextProvider } from './context/PaymentContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeesContextProvider>
          <PaymentContextProvider>
            <Router />
          </PaymentContextProvider>
        </CoffeesContextProvider>
      </BrowserRouter>
      <ToastContainer />
      <GlobalStyle />
    </ThemeProvider>
  )
}
