'use client';

import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { useLogoutButton } from '@/hooks/common/logout-button';

export function LogoutButton() {
  const { handleLogout, loading } = useLogoutButton();

  return (
    <Button variant={'destructive'} onClick={handleLogout} disabled={loading}>
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      Cerrar Sesión
    </Button>
  );
}
