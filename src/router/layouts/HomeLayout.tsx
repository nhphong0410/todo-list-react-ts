import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
    return (
        <div className='w-screen h-screen box-border flex flex-col'>
            <header className='text-center py-2'>
                Header
            </header>
            <hr />
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

export default HomeLayout
