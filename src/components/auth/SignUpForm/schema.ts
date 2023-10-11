import * as Yup from 'yup'

export const schema = Yup.object().shape({
    email: Yup.string().email().required().trim().max(30),
    password: Yup.string().required().trim().min(8).max(30),
    confirmPassword: Yup.string().required().trim().max(30),
    name: Yup.string().required().trim().min(8).max(10)
})
