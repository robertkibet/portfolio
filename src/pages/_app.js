import Head from 'next/head';
import styled from '@emotion/styled';
import Header from '../components/header';
import { Container } from '../components/shared';
import '../../public/assets/globals.css';
import '../../public/assets/icons/css/icons.css';
import Navbar from '../components/header/navbar';
import Footer from '../components/footer';

const Wrapper = styled(Container)`
  height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 120px;
  margin-bottom: 300px;
`;

const gtagInit = () => {
  if (process.browser) {
    window.dataLayer = window.dataLayer || [];
    // eslint-disable-next-line no-undef
    const gtag = () => dataLayer.push();
    gtag('js', new Date());
    gtag('config', process.env.NEXT_PUBLIC_TAG_MANAGER);
  }
};

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Robert Kibet :)</title>

        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_TAG_MANAGER}`} />
        <script>
          {' '}
          { gtagInit() }
          {' '}
        </script>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/assets/favicon/android-chrome-192x192.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/assets/favicon/android-chrome-512x512.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="theme-color" content="#5635be" />
      </Head>
      <main>
        <Header />
        <Navbar />
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
        <Footer />
      </main>

    </>
  );
}
