import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { authLoader } from './loaders/authLoader';

const Auth = lazy(() => import('app/auth'))
const Home = lazy(() => import('app/home'))
const NotFound = lazy(() => import('app/not-found'))
const HomeLayout = lazy(() => import('./layouts/HomeLayout'))
const User = lazy(() => import('app/home/user'))
const AuthLayout = lazy(() => import('./layouts/AuthLayout'))

const router = createBrowserRouter([
    {
        id: 'auth',
        path: '/auth',
        Component: AuthLayout,
        children: [
            {
                path: '',
                Component: Auth,
                loader: authLoader
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
        path: 'not-found',
        Component: NotFound
    },
    {
        id: 'no-match',
        path: '*',
        Component: NotFound,
    }
])

export default router
