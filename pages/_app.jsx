/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import { TerminalContextProvider } from 'react-terminal';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import siteMetadata from '../data/siteMetadata';
import LayoutWrappers from '../components/LayoutWrappers';
import LoadingScreen from '../components/LoadingScreen';
import { PageSEO } from '../components/SEO';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleStart = () => { setLoading(true); };
    const handleComplete = () => { setLoading(false); };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', setTimeout(() => handleComplete(), 3000));
    router.events.on('routeChangeError', handleComplete);
  }, []);

  return (
    <TerminalContextProvider>
      <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

        {/* {loading ? <LoadingScreen /> : ( */}
        <LayoutWrappers>
          <Component {...pageProps} />
        </LayoutWrappers>
        {/* )} */}
      </ThemeProvider>
    </TerminalContextProvider>
  );
}

export default MyApp;
