import {
    useFormik
} from 'formik';
import { schema } from './schema';
import { UserIcon, LockClosedIcon, EyeIcon, EyeSlashIcon, ArrowPathIcon } from '@heroicons/react/24/outline'

const Form = (props: FormProps) => {

    const initialValues: FormValues = {
        email: '',
        password: '',
    }

    const formik = useFormik({
        initialValues,
        onSubmit: values => {
            const data = {
                email: values.email,
                password: values.password
            }
            
            props.onSubmit(data)
        },
        validationSchema: (schema)
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className='relative flex align-middle pb-4'>
                <label htmlFor="email" className='inline-block w-8 h-8 text-emerald-600'>
                    <span><UserIcon /></span>
                </label>
                <div className='flex-grow ml-2'>
                    <input
                        id='email'
                        name='email'
                        type='email'
                        placeholder='email'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className='block outline-none w-full border-b border-emerald-600 bg-transparent focus:border-emerald-700 transition'
                    />
                </div>
                <span
                    className='absolute bottom-0 right-0 text-red-600 text-sm'
                >
                    {formik.touched.email && formik.errors.email}
                </span>
            </div>
            <div className='relative flex align-middle pb-4'>
                <label htmlFor="email" className='inline-block w-8 h-8 text-emerald-600'>
                    <span><LockClosedIcon /></span>
                </label>
                <div className='flex-grow ml-2'>
                    <input
                        id='password'
                        name='password'
                        type='password'
                        placeholder='Password'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        className='block outline-none w-full border-b border-emerald-600 bg-transparent focus:border-emerald-700 transition'
                    />
                </div>
                <span
                    className='absolute bottom-0 right-0 text-red-600 text-sm'
                >
                    {formik.touched.password && formik.errors.password}
                </span>
            </div>
            <div className='flex justify-center items-center mt-6'>
                <button
                    className='flex justify-center items-center w-32 h-10 rounded-md bg-emerald-600 shadow-md shadow-emerald-500/50 text-white transition active:bg-emerald-700 disabled:bg-emerald-700'
                    type='submit'
                    disabled={props.isLoading}
                >
                    {props.isLoading ? <span className='inline-block w-5 animate-spin'><ArrowPathIcon /></span> : <span>Sign in</span>}
                </button>
            </div>
        </form>
    )
}

export default Form

type FormValues = {
    email: string,
    password: string,
}

export type FormProps = {
    isLoading: boolean,
    onSubmit: (data: onSubmitData) => void
}

export type onSubmitData = {
    email: string
    password: string
}