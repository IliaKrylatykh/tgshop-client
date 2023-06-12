import { useEffect } from 'react'
import './App.scss'
import { Header } from './components/Header/Header'

const tg = window.Telegram.WebApp

function App() {
	useEffect(() => {
		tg.ready()
	}, [])

	const onClose = () => {
		tg.close()
	}

	return (
		<div className='App'>
			<Header />
			<List />
		</div>
	)
}

export default App
