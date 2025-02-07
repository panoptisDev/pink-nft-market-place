import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import { Footer, Navbar } from '../components';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <div className="dark:bg-nft-dark bg-white ">
      <Navbar />
      <div className="pt-65">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>

    <Script src="https://kit.fontawesome.com/9f17f34755.js" crossorigin="anonymous" />
  </ThemeProvider>
);

export default MyApp;

