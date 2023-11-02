import { CartContextProvider } from '@/contexts/useCart'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AppProps } from 'next/app'

function MyApp({Component, pageProps} : AppProps) {
  return (
    <CartContextProvider>
      <Component {...pageProps}/>
    </CartContextProvider>
  )
}

export default MyApp
