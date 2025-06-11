import type { AppProps } from 'next/app';
import '../styles/globals.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';

const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default MyApp;
