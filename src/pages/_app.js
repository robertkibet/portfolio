import Head from 'next/head';
import { AnimateSharedLayout } from 'framer-motion';
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
  position: relative;
`;

const gtagInit = () => {
  if (process.browser) {
    window.dataLayer = window.dataLayer || [];
    // eslint-disable-next-line no-undef
    const gtag = () => dataLayer.push(arguments);
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
        <title>Robert Kibet - Software Engineer</title>
        <meta name="title" content="Robert Kibet - Software Engineer" />
        <meta
          name="description"
          content="I use programming to create cool and enjoyable experiences that solve problems. I enjoy hiking as much as cooking. Hire me :)
"
        />
        <meta name="keywords" content="software, frontend developer, frontend designer, javascript, frontend engineer, software engineer, nairobi, kenya, top frontend developers in kenya, top software engineers in kenya, engineering, react, node, nextjs" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="10 days" />
        <meta name="author" content="robert kibet" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kibet.me/" />
        <meta property="og:title" content="Robert Kibet - Software Engineer" />
        <meta
          property="og:description"
          content="I use programming to create cool and enjoyable experiences that solve problems. I enjoy hiking as much as cooking. Hire me :)
"
        />
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://kibet.me/" />
        <meta property="twitter:title" content="Robert Kibet - Software Engineer" />
        <meta
          property="twitter:description"
          content="I use programming to create cool and enjoyable experiences that solve problems. I enjoy hiking as much as cooking. Hire me :)
"
        />
        <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
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
          <AnimateSharedLayout>
            <Component {...pageProps} />
          </AnimateSharedLayout>
        </Wrapper>
        <Footer />
      </main>

    </>
  );
}
