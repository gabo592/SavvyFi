import { login } from '@/app/auth/actions';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

export function useLoginForm() {
  const formSchema = z.object({
    email: z
      .string()
      .email({ message: 'Ingrese un correo electrónico válido.' }),
    password: z
      .string()
      .min(6, { message: 'La contraseña debe tener al menos 6 caracteres.' }),
  });

  type FormSchema = z.infer<typeof formSchema>;

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: FormSchema) {
    const formData = new FormData();

    formData.append('email', values.email);
    formData.append('password', values.password);

    const result = await login(formData);

    if (!result.success) {
      toast.error(result.error);
    }
  }

  return {
    form,
    onSubmit,
  };
}
