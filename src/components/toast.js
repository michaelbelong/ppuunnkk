import React, {useState} from 'react';
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


function Toaster() {
	const toast = useToast()
	return (
		<Button 
			backgroundColor="yellow"
			color="black"
			fontSize="2xl"
			borderRadius="8px"
			onClick = {
			() =>
			toast({
				position: 'bottom-left',
				render: () => ( <
					Box color = 'black'
					p = { 3 } bg = 'white' >
					Hello World <
					/Box>
				),
			})
		} >
		𝚆𝙴𝙽 <
		/Button>
	)
};

export default Toaster