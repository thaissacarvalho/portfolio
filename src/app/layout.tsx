import type React from 'react';
import type { Metadata } from 'next';
import { Gabarito } from 'next/font/google';
import Header from './layout/Header';
import Footer from './layout/Footer';
import ClientLayout from './layout/client-layout';
import './globals.css';

const gabarito = Gabarito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'bythaissa | Thaissa Carvalho',
  description:
    'Portfolio de desenvolvedora back end com foco em soluções eficientes e inovadoras',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={gabarito.className}>
        <ClientLayout>
          <Header />
          {children}
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
