import { SignIn } from './components'
import { AuthActions } from 'core/constants'
import { useLocation, useSearchParams } from 'react-router-dom'
import SignUp from './components/SignUp'

const Auth = () => {
    const { search } = useLocation()
    const [searchParams, _] = useSearchParams(search)
    const action = searchParams.get('action')

    return (
        <div className='max-w-[600px] mx-auto mt-20 rounded-md  border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white via-25% to-emerald-50'>
            <h1 className='text-center text-3xl font-medium text-emerald-600 translate-y-6'>Tu-đu Lít</h1>
            {renderMainContent(action)}
        </div>
    )
}

export default Auth

const renderMainContent = (action: string | null) => {
    switch (action) {
        case AuthActions.SIGN_IN:
            return (<SignIn />)
        case AuthActions.SIGN_UP:
            return (<SignUp />)
        default:
            return (<SignIn />)
    }
}
