import SignInForm, { OnSignInParams } from 'components/auth/SignInForm'
import { useDispatch, useSelector } from 'react-redux'
import { selector as authSelectors, action as authAction } from 'core/redux/auth'

const SignIn = () => {
	const loading = useSelector(authSelectors.AuthSelectLoading)
	const dispatch = useDispatch()

	const onSignIn = (data: OnSignInParams) => {
		const payload = {
			email: data.email,
			password: data.password
		}

		dispatch(authAction.actions.authSignInStart(payload))
	}

	return (
		<div className='max-w-[400px] mx-auto px-2 py-20'>
			<SignInForm
				loading={loading}
				onSignIn={onSignIn}
			/>
		</div>
	)
}

export default SignIn
