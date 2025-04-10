// pages/_app.tsx
import './globals.css';  // Import du fichier CSS global
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
