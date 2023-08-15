import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { AlertProvider } from '@/hooks/useAlert';
import { UserProvider } from '@/hooks/useUser';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AlertProvider>
      <UserProvider>
        <div className="min-h-screen bg-white flex flex-col justify-between text-black">
          <div className="p-4 md:px-20 ">
            <div className="bg-white">
              <Header />

              <div className="max-w-6xl mx-auto">
                <Component {...pageProps} />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </UserProvider>
    </AlertProvider>
  );
}
