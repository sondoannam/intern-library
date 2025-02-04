'use client';

import AuthForm from '@/components/auth/AuthForm';
import { signUpSchema } from '@/lib/validation';

const SignUpPage = () => {
  return (
    <AuthForm
      type='SIGN_IN'
      schema={signUpSchema}
      defaultValues={{
        email: '',
        password: '',
        fullName: '',
        userSignUpType: 'student',
      }}
      onSubmit={async (data) => {
        return { success: true };
      }}
    />
  );
};

export default SignUpPage;
