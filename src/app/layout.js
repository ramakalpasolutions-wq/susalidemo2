import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import ScrollReset from '@/components/ScrollReset';
import { LanguageProvider } from '@/context/LanguageContext';
import './globals.css';

export const metadata = {
  title: { default: 'SUSALI | Healthcare, Better Connected', template: '%s | SUSALI' },
  description: 'SUSALI — Better Connections. Better Healthcare Journeys.',
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <LanguageProvider>
          <ScrollReset />
          {/* <ScrollProgress /> */}
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}