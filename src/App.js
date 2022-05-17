import React, {useState} from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Button,
  VStack,
  HStack,
  Code,
  Grid,
  theme,
  Toast,
  extendTheme
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './components/Logo';
import catchPhrases from './components/catchPhrases'

// Click WEN button
// Select Quote from Array
// Render Toast to Page
// Play Pokemon Sound
// Dismiss Toast -- Fade Out

const myTheme = extendTheme({
  colors: {
      whiteAlpha: 'rgba(255, 255, 255, 0.16)',
      green: '#00FF46',
      blue: '#0075FF',
      orange: '#FF7F00',
      yellow: '#FFFF00',
      chartreuse: '#B5FF00',
      pink: '#FF00C4',
  }
});

function App() {
  
  const randomPhrase = catchPhrases[Math.floor(Math.random()*catchPhrases.length)];
  
  const generateRandomPhrase = () => {
      const randomPhrase = catchPhrases[Math.floor(Math.random()*catchPhrases.length)];
      console.log(randomPhrase);
      // setRandomPhrase(randomPhrase);
  };
  
  const comingSoon = () => {
    console.log("𝙲𝙾𝙼𝙸𝙽𝙶 𝚂𝙾𝙾𝙽");
  }
  
  const alsoComingSoon = () => {
    console.log("𝙰𝙻𝚂𝙾 𝙲𝙾𝙼𝙸𝙽𝙶 𝚂𝙾𝙾𝙽");
  }
  
  return (
    <ChakraProvider theme={myTheme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <HStack>
            <Button
              backgroundColor="green"
              color="black"
              // href="https://www.twitter.com/ppuunnkkdotcom"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
              onClick={comingSoon}
            >
              𝙼𝙰𝙽𝙸𝙵𝙴𝚂𝚃𝙾
            </Button>
            <Button
              backgroundColor="pink"
              color="black"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              𝚃𝚆𝙸𝚃𝚃𝙴𝚁
            </Button>
            <Button
              backgroundColor="orange"
              color="black"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
              onClick={alsoComingSoon}
            >
              𝙳𝙸𝚂𝙲𝙾𝚁𝙳
            </Button>
            <Button
              backgroundColor="yellow"
              color="black"
              href="https://www.twitter.com/ppuunnkkdotcom"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              onClick={generateRandomPhrase}
            >
              𝚆𝙴𝙽
            </Button>
            </HStack>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
