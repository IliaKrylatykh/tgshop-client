import './Header.scss'

export const Header = () => {
	const tg = window.Telegram.WebApp

	return (
		<nav className='header'>
			<div className='links'>
				<a
					className='link'
					href='https://instagram.com/krylbrooch?igshid=ZGUzMzM3NWJiOQ=='
				>
					Instagram
				</a>
				<a
					className='link'
					href='https://www.youtube.com/channel/UCp9rw9kA3x05az2m-66twUQ'
				>
					YouTube
				</a>
			</div>
			<button className='close'>Close</button>
		</nav>
	)
}
