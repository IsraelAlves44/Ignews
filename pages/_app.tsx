import { AppProps} from 'next/app'
import { Header } from '../src/components/Header'
import { SubscribeButton } from '../src/components/SubscribeButton' 
import {Provider as NextAuthProvider} from 'next-auth/client'
import "../src/styles/global.scss"

function MyApp({ Component, pageProps }: AppProps) {
  
  return(
    <NextAuthProvider session = {pageProps.session}>
    
    <Header />
    <Component {...pageProps} />
    </ NextAuthProvider >
  )
  
}
export default MyApp