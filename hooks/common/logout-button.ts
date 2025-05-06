import { logout } from '@/app/auth/actions';
import { useState } from 'react';

export function useLogoutButton() {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    await logout();
    setLoading(false);
  };

  return {
    handleLogout,
    loading,
  };
}
