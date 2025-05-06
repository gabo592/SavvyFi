'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { ChevronLeft } from 'lucide-react';

export function ReturnButton() {
  const router = useRouter();

  return (
    <Button variant={'outline'} size={'icon'} onClick={() => router.back()}>
      <ChevronLeft />
    </Button>
  );
}
