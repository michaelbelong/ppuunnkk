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
  Grid,
  Image,
  theme,
  useToast,
  extendTheme,
  useMediaQuery
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './components/Logo';
import WordmarkDark from './assets/brand/celpunk.gif';
import catchPhrases from './components/catchPhrases';
import Toaster from './components/Toaster';
import { mode } from '@chakra-ui/theme-tools'
import "./styles.css";
// import Noise from './noise'

const myTheme = extendTheme({
  config: {
    useSystemColorMode: false,
    
  },
  colors: {
      green: '#00FF46',
      blue: '#0075FF',
      orange: '#FF7F00',
      yellow: '#FFFF00',
      chartreuse: '#B5FF00',
      pink: '#FF00C4',
      darkback: '#192817'
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode('darkback', 'darkback')(props),
        backgroundImage: mode('linear-gradient(45deg, #0075FF 25%, transparent 25%), linear-gradient(-45deg, #0075FF 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #0075FF 75%), linear-gradient(-45deg, transparent 75%, #0075FF 75%)','linear-gradient(45deg, #B5FF00 25%, transparent 25%), linear-gradient(-45deg, #B5FF00 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #B5FF00 75%), linear-gradient(-45deg, transparent 75%, #B5FF00 75%)'),
        backgroundSize: '40px 40px',
        backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
      }
    })
  }
});



const Okshell = () => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 7 7"
  >
    <path d="M0,0H3V3H0V0ZM2,1H1V2H2Z" fill="#06f" />
    <path d="M5,0V1H6V2H5V3H4V0ZM6,2V3H7V2ZM6,1V0H7V1Z" fill="#00db80" />
    <polygon
      points="6 4 6 5 5 5 5 4 4 4 4 5 4 6 4 7 5 7 5 6 6 6 6 7 7 7 7 6 7 5 7 4 6 4"
      fill="#ff009d"
    />
    <polygon
      points="2 4 1 4 1 5 1 6 0 6 0 7 1 7 2 7 2 6 2 5 3 5 3 4 2 4"
      fill="#ffa600"
    />
  </svg>
);

function App() {
  
  return (
    <ChakraProvider theme={ myTheme }>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
        <Flex>
          <Link
            backgroundColor="black"
            padding="6px"
            height="40px"
            color="current"
            _hover={ { color: 'green', bgColor: 'white' } }
            justifySelf="flex-start"
            href="https://www.oksh.app/"
            variant="none"
            isExternal
          >
          <Okshell />
          </Link>
          <Spacer />
          <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
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
              _hover={ { bg: 'black', color: 'orange' } }
              variant="none"
            >
            <Link
            href="https://discord.gg/ppuunnkk"
            variant="none"
            isExternal
            >
              𝙳𝙲𝚁𝙳
              </Link>
            </Button>
            <Button
              backgroundColor="yellow"
              borderRadius="none"
              color="black"
              fontSize={['3xl','1xl','1xl','2xl']}
              target="self"
              rel="noopener noreferrer"
              _hover={ { bg: 'black', color: 'yellow' } }
              variant="none"
            >
            <Link
            href="https://mirror.xyz/metanorm.eth"
            variant="none"
            isExternal
            >
              𝙼𝙸𝚁𝚁
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
