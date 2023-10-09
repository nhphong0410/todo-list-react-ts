import * as Yup from 'yup'

export const schema = Yup.object().shape({
    email: Yup.string().email().required().trim().max(10),
    password: Yup.string().required().trim().min(8).max(30),
    name: Yup.string().required().trim().min(8).max(10)
})
