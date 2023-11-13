import {
    useFormik
} from 'formik';
import { schema } from './schema';
import { Account, Password } from 'component/icons';

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
            <div>
                <label htmlFor="email">
                    <Account size={8} />
                </label>
                <div>
                    <input
                        id='email'
                        name='email'
                        type='email'
                        placeholder='email'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </div>
                <span>
                    {formik.touched.email && formik.errors.email}
                </span>
            </div>
            <div>
                <label htmlFor="password">
                    <span><Password size={8} /></span>
                </label>
                <div>
                    <input
                        id='password'
                        name='password'
                        type='password'
                        placeholder='Password'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.password}

                    />
                </div>
                <span>
                    {formik.touched.password && formik.errors.password}
                </span>
            </div>
            <div>
                <button
                    type='submit'
                    disabled={props.isLoading}
                >
                    {props.isLoading ? <span></span> : <span>Sign in</span>}
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