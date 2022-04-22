import { AppProps } from 'next/app';
import { ParallaxProvider } from 'react-scroll-parallax';
import '../styles/global.scss';


function App({ Component, pageProps }: AppProps) {
  return <ParallaxProvider><Component {...pageProps} /></ParallaxProvider>
}

export default App