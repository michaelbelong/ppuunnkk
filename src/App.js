import React, {useState} from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Button,
  Link,
  VStack,
  HStack,
  Flex,
  Spacer,
  Code,
  Grid,
  Image,
  theme,
  useToast,
  extendTheme,
  useMediaQuery
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './components/Logo';
import WordmarkLight from './𝙿𝙾𝙽𝙺.png';
import WordmarkDark from './𝙿𝚄𝙽𝙺.png';
import catchPhrases from './components/catchPhrases';
import Toaster from './components/Toaster';

// Click WEN button
// Select Quote from Array
// Render Toast to Page
// Play Pokemon Sound
// Dismiss Toast -- Fade Out

const myTheme = extendTheme({
  colors: {
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
            <Image
              w={['77vw','50vw','42vw','24vw']}
              h='auto'
              src={WordmarkLight} className="Wordmark" alt="𝙿𝙴𝙾𝙿𝙻𝙴’𝚂 𝚄𝙽𝙸𝚃𝙴𝙳 𝙸𝙽 𝙽𝙾𝙽-𝙺𝙾𝙽𝙵𝙾𝚁𝙼𝙸𝚃𝚈" pointerEvents="none" />
            <Logo 
              w={['77vw','68vw','42vw','24vw']}
              alt="▛▀ ▙▟ ▛▟ ▙▚ ▚▞"
              pointerEvents="none" />
              <Spacer />
            <Flex
              direction={ ['column','column','row','row'] } 
              minWidth='max-content'
              w={['80vw','77vw','42vw','32vw']}
              align='center'
              alignContent='center'
              alignItems='center'
              gap='8'
              >
              <Spacer />
            <Button
              backgroundColor="green"
              borderRadius="none"
              color="black"
              // href="https://www.twitter.com/ppuunnkkdotcom"
              fontSize={['3xl','1xl','1xl','2xl']}
              target="_blank"
              rel="noopener noreferrer"
              onClick={comingSoon}
              _hover={ { bg: 'black', color: 'green' } }
            >
              𝙼𝙰𝙽𝙸𝙵𝙴𝚂𝚃𝙾
            </Button>
            <Button
              backgroundColor="pink"
              borderRadius="none"
              color="black"
              fontSize={['3xl','1xl','1xl','2xl']}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.twitter.com/ppuunnkkdotcom"
              variant="button"
              _hover={ { bg: 'black', color: 'pink' } }
            >
              𝚃𝚆𝙸𝚃𝚃𝙴𝚁
            </Button>
            <Button
              backgroundColor="orange"
              borderRadius="none"
              color="black"
              fontSize={['3xl','1xl','1xl','2xl']}
              target="_blank"
              rel="noopener noreferrer"
              onClick={alsoComingSoon}
              _hover={ { bg: 'black', color: 'orange' } }
              variant="outline"
            >
              𝙳𝙸𝚂𝙲𝙾𝚁𝙳
            </Button>
            <Toaster />
            <Spacer />
            </Flex>
            <Spacer />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
