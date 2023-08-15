import Link from 'next/link';
import { useUser } from '@/hooks/useUser';

export default function Header() {
  const { loading, user, error } = useUser();

  return (
    <header className="inset-x-0 top-0 z-50 mb-20">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 text-xl font-bold">
          <Link href="/" className="-m-1.5 p-1.5">
            AI Content Generator
          </Link>
        </div>

        <div className="flex gap-x-12">
          {!loading && user && (
            <Link
              href="/logout"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Logout <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
