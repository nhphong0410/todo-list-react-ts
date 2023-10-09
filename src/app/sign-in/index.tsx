import SignInForm from 'components/auth/SignInForm'

const SignIn = () => {

	return (
		<div
			className='max-w-[600px] mx-auto mt-20 rounded-md shadow-md shadow-emerald-100'
		>
			<div className='max-w-[400px] mx-auto px-2 py-20'>
				<SignInForm />
			</div>
		</div>
	)
}

export default SignIn
