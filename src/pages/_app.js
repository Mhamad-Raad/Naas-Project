import '@/styles/globals.css';

import { Poppins } from 'next/font/google';

import Navbar from '@/Components/Layout/Navbar';
import Footer from '@/Components/Layout/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={poppins.className}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

