import {
    Formik,
    Form,
    Field,
    ErrorMessage
} from 'formik';
import { schema as SignInFormSchema } from './schema';
import TextInput from 'components/auth/TextInput';
import { UserIcon, LockClosedIcon } from '@heroicons/react/24/solid'
import SubmitButton from '../SubmitButton';

const SignInForm = (props: SignInFormProps) => {
    const initialValues: SignInFormValues = {
        email: '',
        password: '',
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, _) => {
                const data = {
                    email: values.email,
                    password: values.password
                }

                props.onSignIn(data)
            }}
            validationSchema={SignInFormSchema}
        >
            <Form>
                <div className='relative flex align-middle pb-4'>
                    <label htmlFor="email" className='inline-block w-8 h-8 text-emerald-600'>
                        <span><UserIcon /></span>
                    </label>
                    <div className='flex-grow ml-2'>
                        <Field
                            id='email'
                            name='email'
                            type='email'
                            placeholder='email@example.com'
                            component={TextInput}
                        />
                    </div>
                    <span className='absolute bottom-0 right-0 text-red-600 text-sm'>
                        <ErrorMessage
                            name='email'
                            component='span'
                            className='animate-text-appear'
                        />
                    </span>
                </div>
                <div className='relative flex align-middle pb-4'>
                    <label htmlFor="password" className='inline-block w-8 h-8 text-emerald-600'>
                        <span><LockClosedIcon /></span>
                    </label>
                    <div className='flex-grow ml-2'>
                        <Field
                            id='password'
                            name='password'
                            type='password'
                            placeholder='password'
                            component={TextInput}
                        />
                    </div>
                    <span className='absolute bottom-0 right-0 text-red-600 text-sm'>
                        <ErrorMessage
                            name='password'
                            component='span'
                            className='animate-text-appear'
                        />
                    </span>
                </div>
                <div className='flex justify-center items-center mt-6'>
                    <SubmitButton
                        title='Sign in'
                        type='submit'
                        loading={props.loading}
                    />
                </div>
            </Form>
        </Formik>
    )
}

export default SignInForm

type SignInFormValues = {
    email: string,
    password: string,
}

export type SignInFormProps = {
    loading: boolean,
    onSignIn: (data: OnSignInParams) => void
}

export type OnSignInParams = {
    email: string
    password: string
}