import React, {useState} from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Button,
  VStack,
  HStack,
  Flex,
  Code,
  Grid,
  Image,
  theme,
  useToast,
  extendTheme
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './components/Logo';
import WordmarkLight from './𝙿𝙾𝙽𝙺.png'
import WordmarkDark from './𝙿𝚄𝙽𝙺.png'
import catchPhrases from './components/catchPhrases'
import Toaster from './components/Toaster'

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
          <VStack spacing={100}>
            <Image src={WordmarkLight} className="Wordmark" alt="𝙿𝙴𝙾𝙿𝙻𝙴’𝚂 𝚄𝙽𝙸𝚃𝙴𝙳 𝙸𝙽 𝙽𝙾𝙽-𝙺𝙾𝙽𝙵𝙾𝚁𝙼𝙸𝚃𝚈" pointerEvents="none" height="24vmin" />
            <Logo h="42vmin" alt="▛▀ ▙▟ ▛▟ ▙▚ ▚▞" pointerEvents="none" />
            <Flex minWidth='max-content' alignItems='center' gap='2'>
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
            <Toaster />
            </Flex>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
