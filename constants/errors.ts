import { Error } from '@/types/error';

export const Errors: Record<Error, string> = {
  invalid_credentials:
    'Credenciales de inicio de sesión o tipo de concesión no reconocidos',
  unknown: 'Ocurrió un error desconocido',
};
