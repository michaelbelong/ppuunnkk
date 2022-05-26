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
// import WordmarkDark from './𝙿𝚄𝙽𝙺.png';
import WordmarkDark from './assets/celpunk.gif';
import catchPhrases from './components/catchPhrases';
import Toaster from './components/Toaster';

// Click WEN button
// Select Quote from Array
// Render Toast to Page
// Play Pokemon Sound
// Dismiss Toast -- Fade Out

const myTheme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark",
  },
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
    <ChakraProvider theme={ myTheme }>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={100}>
            <Image
              w={['77vw','50vw','42vw','24vw']}
              h='auto'
              src={WordmarkDark} className="Wordmark" alt="𝙿𝙴𝙾𝙿𝙻𝙴’𝚂 𝚄𝙽𝙸𝚃𝙴𝙳 𝙸𝙽 𝙽𝙾𝙽-𝙺𝙾𝙽𝙵𝙾𝚁𝙼𝙸𝚃𝚈" pointerEvents="none" />
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
              fontSize={['3xl','1xl','1xl','2xl']}
              target="_self"
              rel="noopener noreferrer"
              onClick={comingSoon}
              _hover={ { bg: 'black', color: 'green' } }
            >
              <Link
              href="https://metanorm.notion.site/b732402a54b94122869b7429c389fb59"
              variant="none"
              isExternal
              >
              𝙲𝚁𝚃𝙰
              </Link>
            </Button>
            <Button
              backgroundColor="pink"
              borderRadius="none"
              color="black"
              fontSize={['3xl','1xl','1xl','2xl']}
              target="_blank"
              rel="noopener noreferrer"
              variant="button"
              _hover={ { bg: 'black', color: 'pink' } }
            >
              <Link
              href="https://www.twitter.com/ppuunnkkdotcom"
              variant="none"
              isExternal
              >
              𝚃𝚆𝚃𝚁
              </Link>
            </Button>
            <Button
              backgroundColor="orange"
              borderRadius="none"
              color="black"
              fontSize={['3xl','1xl','1xl','2xl']}
              target="self"
              rel="noopener noreferrer"
              onClick={alsoComingSoon}
              _hover={ { bg: 'black', color: 'orange' } }
              variant="none"
            >
            <Link
            href="https://discord.gg/dVHwRRup"
            variant="none"
            isExternal
            >
              𝙳𝙲𝚁𝙳
              </Link>
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
