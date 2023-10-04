import { Outlet } from 'react-router-dom'

const SignInLayout = () => {
    return (
        <div className='w-screen h-screen box-border flex flex-col'>
            <main className='flex-grow'>
                <Outlet />
            </main>
            <hr />
            <footer className='text-center py-1'>
                Footer
            </footer>
        </div>
    )
}

export default SignInLayout
