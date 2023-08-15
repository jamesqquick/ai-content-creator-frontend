import { useUser } from '@/hooks/useUser';
import React, { useEffect } from 'react';

export default function Logout() {
  const { logout } = useUser();

  useEffect(() => {
    logout();
  }, [logout]);
  return <div>Logging out...</div>;
}
