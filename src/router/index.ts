import { createBrowserRouter } from 'react-router-dom';
import SignIn from 'app/sign-in';
import Home from 'app/home'
import NotFound from 'app/not-found';
import HomeLayout from './layouts/HomeLayout';
import User from 'app/home/user';
import SignInLayout from './layouts/SignInLayout';

const router = createBrowserRouter([
    {
        id: 'sign-in',
        path: '/sign-in',
        Component: SignInLayout,
        children: [
            {
                path: '',
                Component: SignIn
            }
        ]
    },
    {
        id: 'home',
        path: '/',
        Component: HomeLayout,
        children: [
            {
                path: '',
                Component: Home
            },
            {
                path: 'user',
                Component: User
            }
        ]
    },
    {
        id: 'not-found',
        path: '*',
        Component: NotFound
    }
])

export default router
