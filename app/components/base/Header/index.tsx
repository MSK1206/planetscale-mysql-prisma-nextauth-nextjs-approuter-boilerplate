'use client';

import { useSession } from 'next-auth/react';
import Menu from '@/app/components/layouts/Menu';

export default function Header() {
  const { data: session } = useSession();
  return (
    <div className="navbar sticky px-4 py-4">
      <div className="navbar-start">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          msk.io
        </a>
      </div>
      <div className="navbar-end">
        <Menu user={session?.user} />
      </div>
    </div>
  );
}
