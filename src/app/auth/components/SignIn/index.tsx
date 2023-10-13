import Form, { onSubmitData } from './form'
import { useDispatch, useSelector } from 'react-redux'
import { selector as authSelectors, action as authAction } from 'core/redux/auth'
import { account } from 'core/appwrite'
import { useEffect } from 'react'

const SignIn = () => {
	useEffect(() => {
		getAuthSession()
	}, [])

	const isLoading = useSelector(authSelectors.AuthSelectLoading)
	const dispatch = useDispatch()

	const onSubmit = (data: onSubmitData) => {
		const payload = {
			email: data.email,
			password: data.password
		}

		dispatch(authAction.actions.authSignInStart(payload))
	}

	return (
		<div className='max-w-[400px] mx-auto px-2 py-20'>
			<Form
				isLoading={isLoading}
				onSubmit={onSubmit}
			/>
		</div>
	)
}

export default SignIn

const getAuthSession = async () => {
	try {
		const authSession = await account.get()
		console.log(authSession)
		const listSession = await account.listSessions()
		console.log(listSession)
	}
	catch (error) {
		console.log(error)
	}
}