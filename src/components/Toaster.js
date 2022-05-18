import './Toaster.css'
import React, { useState } from 'react';
import {
	ChakraProvider,
	Box,
	Text,
	Button,
	Flex,
	Code,
	Grid,
	Image,
	theme,
	Toast,
	useToast,
	extendTheme
} from '@chakra-ui/react';
import catchPhrases from './catchPhrases'

function Toaster() {

	const randomPhrase = catchPhrases[Math.floor(Math.random() * catchPhrases.length)];

	let setRandomPhrase = ''
	const generateRandomPhrase = () => {
		const randomPhrase = catchPhrases[Math.floor(Math.random() * catchPhrases.length)];
		console.log(randomPhrase);
		setRandomPhrase(randomPhrase);
	};

	const toast = useToast();

	const id = 'toaster'

	return (
		<Button 
			className = "toaster"
			borderRadius="none"
			backgroundColor = "yellow"
			_hover = { { bg: 'black', color: 'yellow' } }
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
			𝚆𝙴𝙽
		</Button>
	)
};

export default Toaster