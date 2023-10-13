import reactLogo from 'assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

const Home = () => {
	return (
		<div className='max-w-7xl p-8 m-auto text-center select-none'>
			<div className='flex justify-evenly max-w-fit m-auto'>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1 className='text-teal-500 font-semibold text-4xl'>Vite + React</h1>
		</div>
	)
}

export default Home