import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
    ErrorMessage
} from 'formik';
import { schema as SignInFormSchema } from './schema';
import Input from 'components/auth/Input';
import { UserIcon, LockClosedIcon } from '@heroicons/react/24/solid'

const SignInForm = (props: SignInFormProps) => {
    const initialValues: SignInFormValues = {
        email: '',
        password: '',
        name: ''
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
                console.log(JSON.stringify(values, null, 2))
            }}
            validationSchema={SignInFormSchema}
        >
            <Form>
                <div className='relative flex align-middle pb-4'>
                    <label htmlFor="email" className='inline-block w-8 h-8 '>
                        <span><UserIcon /></span>
                    </label>
                    <div className='flex-grow ml-2'>
                        <Field
                            id='email'
                            name='email'
                            type='email'
                            placeholder='email@example.com'
                            component={Input}
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
                    <label htmlFor="password" className='inline-block w-8 h-8'>
                        <span><LockClosedIcon /></span>
                    </label>
                    <div className='flex-grow ml-2'>
                        <Field
                            id='password'
                            name='password'
                            type='password'
                            placeholder='password'
                            component={Input}
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
                    <button
                        type='submit'
                        className='rounded-md bg-emerald-600 shadow-md shadow-emerald-500/50 text-white px-8 py-2 transition active:bg-emerald-700'
                    >
                        Sign in
                    </button>
                </div>
            </Form>
        </Formik>
    )
}

export default SignInForm

type SignInFormValues = {
    email: string,
    password: string,
    name: string
}

export type SignInFormProps = {

}
