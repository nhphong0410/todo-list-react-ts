import { createBrowserRouter } from 'react-router-dom';
import Auth from 'app/auth';
import Home from 'app/home'
import NotFound from 'app/not-found';
import HomeLayout from './layouts/HomeLayout';
import User from 'app/home/user';
import SignInLayout from './layouts/SignInLayout';

const router = createBrowserRouter([
    {
        id: 'sign-in',
        path: '/auth',
        Component: SignInLayout,
        children: [
            {
                path: '',
                Component: Auth
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
