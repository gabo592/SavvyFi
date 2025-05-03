import { Container } from '@/components/common/container';
import { ModeToggle } from '@/components/common/mode-toggle';
import { LoginForm } from '@/components/auth/login-form';
import Logo from '@/public/images/logo.png';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <>
      <header className="flex items-center justify-between p-4">
        <div className="w-9 h-9"></div>
        <h1 className="text-2xl font-bold">Iniciar Sesión</h1>
        <ModeToggle />
      </header>
      <Container>
        <Image src={Logo} alt="logo" className="w-20 h-auto" />
        <LoginForm />
      </Container>
    </>
  );
}
