import type { AppProps } from 'next/app';
import '../styles/globals.css';
import '@fontsource/cairo/400.css';
import '@fontsource/cairo/700.css';
import 'highlight.js/styles/github-dark.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
