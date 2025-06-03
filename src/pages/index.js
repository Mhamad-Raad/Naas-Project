export const metadata = {
  title: 'Naas Project',
  description: 'A Next.js project',
};

import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}

