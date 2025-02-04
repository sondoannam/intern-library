import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { ZodType } from 'zod';
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { toast } from '@/hooks/use-toast';

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FIELD_NAMES, FIELD_PLACEHOLDERS, FIELD_TYPES } from '@/constants/common';

interface AuthFormProps<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
  type: 'SIGN_IN' | 'SIGN_UP';
}

const AuthForm = <T extends FieldValues>({
  type,
  schema,
  defaultValues,
  onSubmit,
}: AuthFormProps<T>) => {
  const router = useRouter();

  const isSignIn = type === 'SIGN_IN';

  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const { handleSubmit, control, formState: { isSubmitting } } = form;

  const onHandleSubmit: SubmitHandler<T> = async (data) => {
    const result = await onSubmit(data);

    if (result.success) {
      toast({
        title: 'Success',
        description: isSignIn
          ? 'You have successfully signed in.'
          : 'You have successfully signed up.',
      });

      router.push('/');
    } else {
      toast({
        title: `Error ${isSignIn ? 'signing in' : 'signing up'}`,
        description: result.error ?? 'An error occurred.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-2xl font-semibold text-white'>
        {isSignIn ? 'Welcome back to BookWise' : 'Create your library account'}
      </h1>
      <p className='text-light-100'>
        {isSignIn
          ? 'Access the vast collection of resources, and stay updated'
          : 'Please complete all fields and upload a valid university ID to gain access to the library'}
      </p>
      <Form {...form}>
        <form onSubmit={handleSubmit(onHandleSubmit)} className='w-full space-y-6'>
          {Object.keys(defaultValues).map((field) => (
            <FormField
              key={field}
              control={control}
              name={field as Path<T>}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='capitalize'>
                    {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}
                  </FormLabel>
                  <FormControl>
                    {/* {field.name === 'universityCard' ? (
                      <FileUpload
                        type='image'
                        accept='image/*'
                        placeholder='Upload your ID'
                        folder='ids'
                        variant='dark'
                        onFileChange={field.onChange}
                      />
                    ) : ( */}
                    <Input
                      //   required
                      type={FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]}
                      placeholder={FIELD_PLACEHOLDERS[field.name as keyof typeof FIELD_NAMES]}
                      {...field}
                      className='form-input'
                    />
                    {/* )} */}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button type='submit' className='form-btn' loading={isSubmitting}>
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </Button>
        </form>
      </Form>

      <p className='text-center text-base font-medium'>
        {isSignIn ? 'New to BookWise? ' : 'Already have an account? '}

        <Link
          href={isSignIn ? '/sign-up' : '/sign-in'}
          className='font-bold text-primary hover:underline'
        >
          {isSignIn ? 'Create an account' : 'Sign in'}
        </Link>
      </p>
    </div>
  );
};

export default AuthForm;
