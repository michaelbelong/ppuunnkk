import './Toaster.css'
import {
	Box,
	Button,
	useToast,
} from '@chakra-ui/react';
import CatchPhrases from '../CatchPhrases';

function Toaster() {

	const randomPhrase = CatchPhrases[Math.floor(Math.random() * CatchPhrases.length)];

	let setRandomPhrase = ''
	const generateRandomPhrase = () => {
		const randomPhrase = CatchPhrases[Math.floor(Math.random() * CatchPhrases.length)];
		console.log(randomPhrase);
		setRandomPhrase(randomPhrase);
	};

	const toast = useToast();

	const id = 'toaster'

	return (
		<Button 
			className = "toaster"
			borderRadius="none"
			backgroundColor = "chartreuse"
			_hover = { { bg: 'black', color: 'chartreuse' } }
			color = "black"
			fontSize={['3xl','1xl','1xl','2xl']}
			_focus = {
				{
					boxShadow: '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
				}
			}
			onClick = {
				() => {
				if (!toast.isActive(id)) {
				toast({
					id,
					position: 'top-center',
					render: () => ( <
						Box
						pointerEvents='none'
						minWidth='auto'
						w={['84vw','64vw','64vw','20vw']}
						alignItems='center'
						alignContent='center'
						textAlign='center'
						color='black'
						borderRadius='none'
						p= { 4 }
						bg='white'
						fontSize={['2xl','1xl','1xl','2xl']}
						onClick={ generateRandomPhrase }
						>
						{ randomPhrase }
						<
						/Box>
					),
				})
			}
			} }>
			𝚆𝙴𝙽?
		</Button>
	)
};

export default Toaster