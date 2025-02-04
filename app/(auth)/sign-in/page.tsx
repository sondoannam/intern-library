"use client";

import AuthForm from "@/components/auth/AuthForm";
import { signInSchema } from "@/lib/validation";

const SignInPage = () => (
  <AuthForm
    type="SIGN_IN"
    schema={signInSchema}
    defaultValues={{
      email: "",
      password: "",
    }}
    onSubmit={async (data) => { return { success: true }; }}
  />
);

export default SignInPage;