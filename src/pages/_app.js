import Head from 'next/head';
import '../../public/assets/globals.css';
import '../../public/assets/icons/css/icons.css';
import Layout from '../layout';

function MyApp(props) {
  const { Component, pageProps } = props;
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
          content="Robert is a Kenyan Software and Web Developer. I use programming to create cool and enjoyable experiences that solve problems. I enjoy hiking as much as cooking. Hire me :)
"
        />
        <meta name="keywords" content="kibet,robert kibet, robert, robert kibet kiprono, software, frontend developer, frontend designer, javascript, frontend engineer, software engineer, nairobi, kenya, top frontend developers in kenya, top software engineers in kenya, engineering, react, node, nextjs" />
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
        <meta property="og:image" content="https://storage.googleapis.com/sensen-ventures.appspot.com/robert-kibet.PNG" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://kibet.me/" />
        <meta property="twitter:title" content="Robert Kibet - Software Engineer" />
        <meta
          property="twitter:description"
          content="I use programming to create cool and enjoyable experiences that solve problems. I enjoy hiking as much as cooking. Hire me :)
"
        />
        <meta property="twitter:image" content="https://storage.googleapis.com/sensen-ventures.appspot.com/robert-kibet.PNG" />

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
        <Layout>
          {/* <AnimateSharedLayout> */}
          <Component {...pageProps} />
          {/* </AnimateSharedLayout> */}
        </Layout>
      </main>

    </>
  );
}

export default MyApp;
