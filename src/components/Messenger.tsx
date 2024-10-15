type Props = {
	locale?: string
}

const Messenger = ({locale}: Props) => {
	console.log(locale)
	return ( <div style={{padding: '50px', border: '2px solid red', width: 'fit-content'}}>
		Hello world
	</div> );
}

export default Messenger