import { RegisterForm } from '@/components/auth/register-form';
import { Container } from '@/components/common/container';
import { ModeToggle } from '@/components/common/mode-toggle';
import { ReturnButton } from '@/components/common/return-button';
import Logo from '@/public/images/logo.png';
import Image from 'next/image';

export default function RegisterPage() {
  return (
    <>
      <header className="flex items-center justify-between p-4">
        <ReturnButton />
        <h1 className="text-2xl font-bold">Registrarse</h1>
        <ModeToggle />
      </header>
      <Container>
        <Image src={Logo} alt="logo" className="w-20 h-auto" />
        <RegisterForm />
      </Container>
    </>
  );
}
