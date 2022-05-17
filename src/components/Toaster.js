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
	const consoleLog = () => {
		console.log('You clicked.')
	};

	const id = 'test-toast'

	return ( <
		Button className = "toaster"
		backgroundColor = "yellow"
		_hover = { { bg: 'black', color: 'yellow' } }
		color = "black"
		fontSize = "2xl"
		borderRadius = "8px"
		_focus = {
			{
				boxShadow: '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
			}
		}
		onClick = {
			() => {
			if (!toast.isActive(id)) {
			toast({
				position: 'bottom-center',
				render: () => ( <
					Box
					pointerEvents = 'none'
					minWidth='max-content'
					alignItems='center'
					textAlign = 'center'
					color = 'black'
					borderRadius = 'xl'
					p = { 4 } bg = 'white'
					fontSize = 'lg'
					onClick = { generateRandomPhrase }
					isClosable = 'true'
					>
					{ randomPhrase }
					<
					/Box>
				),
			})
		}
		} }> 𝚆𝙴𝙽 <
		/Button>
	)
};

export default Toaster