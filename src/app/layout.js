import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import './globals.css';

export const metadata = {
  title: { default: 'SUSALI | Healthcare, Better Connected', template: '%s | SUSALI' },
  description: 'Explore SUSALI — a connected approach to healthcare coordination, referrals, patient support and hospital collaboration.',
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}