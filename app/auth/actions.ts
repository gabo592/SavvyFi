'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';
import { Result } from '@/types/result';
import { Errors } from '@/constants/errors';

export async function login(formData: FormData): Promise<Result<null>> {
  const supabase = await createClient();

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.error(`Error ${error.code}: ${error.message}`);
    return {
      success: false,
      error: Errors[error.code as keyof typeof Errors] || Errors.unknown,
      data: null,
    };
  }

  revalidatePath('/', 'layout');
  redirect('/');
}

export async function signup(formData: FormData): Promise<Result<null>> {
  const supabase = await createClient();

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    options: {
      data: {
        first_name: formData.get('firstName') as string,
        last_name: formData.get('lastName') as string,
      },
    },
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    console.error(`Error ${error.code}: ${error.message}`);
    return {
      success: false,
      error: Errors[error.code as keyof typeof Errors] || Errors.unknown,
      data: null,
    };
  }

  revalidatePath('/', 'layout');
  redirect('/');
}

export async function logout(): Promise<Result<null>> {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(`Error ${error.code}: ${error.message}`);
    return {
      success: false,
      error: Errors[error.code as keyof typeof Errors] || Errors.unknown,
      data: null,
    };
  }

  revalidatePath('/', 'layout');
  redirect('/');
}
