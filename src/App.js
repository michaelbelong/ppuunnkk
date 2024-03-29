import React from 'react';
import {
  ChakraProvider,
  Box,
  Button,
  Link,
  VStack,
  Flex,
  Spacer,
  Grid,
  Image,
  extendTheme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import { NoiseOverlay } from './components/NoiseOverlay';
import WordmarkDark from './assets/brand/ppuunnkk.gif';
import Toaster from './components/Toaster';
import { mode } from '@chakra-ui/theme-tools';
import "./styles.css";

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
      darkback: '#192817',
      purple: '#8A63D2',
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode('darkback', 'darkback')(props),
        backgroundColor: '#192817',
        backgroundImage: "url('./pstr/Punkless.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% auto',
        bp: 'center center',
        overflowY: 'hidden',
      }
    })
  }
});


function App() {
  
  return (
    <ChakraProvider theme={ myTheme }>
    <>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
        <Flex>
          
          <Spacer />
          <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
          <VStack spacing={100}>
          <Link
          backgroundColor="none"
          padding="6px"
          height="fit-content"
          color="current"
          justifySelf="flex-start"
          href="https://www.punk.energy/"
          variant="none"
          isExternal
          >
          <Image
          w={['44vw','45vw','45vw','33vw']}
          h='auto'
          src={WordmarkDark} className="Wordmark" alt="𝙿𝙴𝙾𝙿𝙻𝙴’𝚂 𝚄𝙽𝙸𝚃𝙴𝙳 𝙸𝙽 𝙽𝙾𝙽-𝙺𝙾𝙽𝙵𝙾𝚁𝙼𝙸𝚃𝚈" pointerEvents="none" />
          </Link>
           
            
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
                backgroundColor="purple" 
                borderRadius="none"
                color="black"
                fontSize={['3xl','1xl','1xl','2xl']}
                target="_self"
                rel="noopener noreferrer"
                _hover={ { bg: 'black', color: 'purple' } }
              >
                <Link
                fontFamily="CMU Typewriter Text"
                
                href="https://www.warpcast.com/punk"
                variant="none"
                isExternal
                >
                <p>Farc</p>
                </Link>
              </Button>
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
              <p>Know</p>
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
              href="https://metanorm.mirror.xyz/"
              variant="none"
              isExternal
              >
              <p>Read</p>
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
              <p>Love</p>
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
            href="https://www.twitter.com/ppuunnkkdotcom"
            variant="none"
            isExternal
            >
              <p>Dumb</p>
              </Link>
            </Button>
            <Toaster />
            <Spacer />
            </Flex>
            <Spacer />
            
          </VStack>
          
        </Grid>
      </Box>

      <NoiseOverlay />
    </>
    </ChakraProvider>
  );
}

export default App;
