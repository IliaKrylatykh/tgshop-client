import './List.scss'

export const List = () => {
	const gallery = [
		{ id: 1, name: 'octop', url: 'https://i.imgur.com/N6owQPa.jpg' },
		{ id: 2, name: 'dolph', url: 'https://i.imgur.com/Z02lQ2T.jpg' },
		{ id: 3, name: 'hat', url: 'https://i.imgur.com/O0Nty8L.jpg' },
	]

	return (
		<div className='list'>
			{gallery.map(item => {
				return (
					<div key={item.id} className='item'>
						<p>{item.name}</p>
						<img src={item.url} />
					</div>
				)
			})}
		</div>
	)
}
