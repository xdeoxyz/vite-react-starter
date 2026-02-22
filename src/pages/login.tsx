import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Link } from 'react-router'
import { toast } from 'sonner'

const formSchema = z.object({
  email: z.email('Please enter a valid email address.'),
  password: z.string().min(8, 'Password must be at least 8 characters.'),
})

type FormData = z.infer<typeof formSchema>

const LoginPage = () => {
  const { control, handleSubmit, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onTouched',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (data: FormData) => {
    toast('You submitted the following values:', {
      description: (
        <pre className='mt-2 w-xs overflow-x-auto rounded-md bg-muted p-4 text-muted-foreground'>
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: 'bottom-right',
    })
  }

  return (
    <div className='w-full max-w-sm'>
      <div className='flex flex-col gap-6'>
        <Card>
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>Enter your email below to login to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form id='login' onSubmit={handleSubmit(onSubmit)}>
              <FieldSet>
                <FieldGroup>
                  <Controller
                    name='email'
                    control={control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name} className='after:text-destructive after:content-["*"]'>
                          Email
                        </FieldLabel>
                        <Input {...field} id={field.name} aria-invalid={fieldState.invalid} placeholder='m@example.com' autoComplete='off' />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    )}
                  />
                  <Controller
                    name='password'
                    control={control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name} className='after:text-destructive after:content-["*"]'>
                          Password
                        </FieldLabel>
                        <Input {...field} id={field.name} type='password' aria-invalid={fieldState.invalid} autoComplete='off' />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        <FieldLabel htmlFor={field.name}>
                          <Link to='/recovery' className='text-muted-foreground underline-offset-4 hover:underline'>
                            Forgot your password?
                          </Link>
                        </FieldLabel>
                      </Field>
                    )}
                  />
                </FieldGroup>
              </FieldSet>
            </form>
          </CardContent>
          <CardFooter>
            <Field>
              <Button type='submit' form='login'>
                Login
              </Button>
              <Button type='button' variant='outline' onClick={() => reset()}>
                Reset
              </Button>
              <FieldDescription className='text-center'>
                Don&apos;t have an account? <Link to='/signup'>Sign up</Link>
              </FieldDescription>
            </Field>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default LoginPage
