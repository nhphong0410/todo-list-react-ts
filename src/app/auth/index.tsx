import { SignIn } from './component'
import { AuthActions } from 'core/constant'
import { useLocation, useSearchParams } from 'react-router-dom'
import SignUp from './component/SignUp'

const Auth = () => {
    const { search } = useLocation()
    const [searchParams,] = useSearchParams(search)
    const action = searchParams.get('action')

    return (
        <div>{renderMainContent(action)}</div>
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
