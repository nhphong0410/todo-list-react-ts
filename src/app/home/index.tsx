import React, { useState } from 'react'
import reactLogo from 'assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

import { useSelector, useDispatch } from 'react-redux'
import { selector as counterSelectors, action as counterAction } from 'core/redux/counter'

const Home = () => {
	const [amount, setAmount] = useState('0')

	const count = useSelector(counterSelectors.counterSelectCount)
	const loading = useSelector(counterSelectors.counterSelectLoading)
	const dispatch = useDispatch()

	const onDecreaseButtonClick = () => {
		dispatch(counterAction.actions.counterDecrease())
	}
	const onIncreaseButtonClick = () => {
		dispatch(counterAction.actions.counterIncrease())
	}
	const onAmountInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAmount(event.target.value)
	}
	const onAddByAmountButtonClick = () => {
		const _amount = Number(amount)

		if (!_amount) {
			return
		}

		dispatch(counterAction.actions.counterIncreaseByAmount({ amount: _amount }))
	}
	const onAddAsyncClick = () => {
		dispatch(counterAction.actions.counterIncreaseAsyncStart())
	}

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
			<div className="w-fit mx-auto my-2">
				<button
					className='mx-2 px-2'
					onClick={onDecreaseButtonClick}
				>
					-
				</button>
				<span>count is {count}</span>
				<button
					className='mx-2 px-2'
					onClick={onIncreaseButtonClick}
				>
					+
				</button>
			</div>
			<input type="text" className='mx-auto my-2 border text-center' value={amount} onChange={onAmountInputChange} />
			<div>
				<button
					onClick={onAddByAmountButtonClick}
				>
					Add by amount
				</button>
			</div>
			<div>
				<button
					onClick={onAddAsyncClick}
					disabled={loading}
				>
					Add async
				</button>
			</div>
		</div>
	)
}

export default Home