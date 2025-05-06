import { LogoutButton } from '@/components/common/logout-button';
import { ModeToggle } from '@/components/common/mode-toggle';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between p-4">
        <ModeToggle />
        <h1 className="text-2xl font-bold">SavvyFi</h1>
        <LogoutButton />
      </header>
      <main>
        <Button>Click</Button>
      </main>
    </>
  );
}
