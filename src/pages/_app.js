import Navbar from '@/Components/Layout/Navbar';
import '@/styles/globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={`${poppins.variable} font-sans`}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

