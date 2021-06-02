import { useEffect, Fragment } from 'react';
import TagManager from 'react-gtm-module';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import GlobalStyle from '../GlobalStyle';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-N4VBX7F' });
  }, []);

  return (
    <Fragment>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp;
