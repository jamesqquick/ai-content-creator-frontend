import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="">
      <div className="pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-10">
          <PageHeader
            title="Your AI Content Creator"
            subtitle="Consistently sharing your journey has lots of benefits but can be challenging. Use AI Content Creator to stay consistent with half the effort!"
          />
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/signup"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
