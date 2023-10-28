import { Box, Heading, Button, Flex, Stack} from '@chakra-ui/react'
import bgImage from './images/banner.jpg'

function App() {
  return (

      <Box
      h='30vh'
      bg='gray'
      bgImage={`url(${bgImage})`}
      bgRepeat='no-repeat'
      bgSize='cover'
      maxW="container.sm" p={4}
      display={{ base: "block", md: "none" }}
      width={{ base: "100%", sm: "50%", md: "25%" }}
      borderRadius="lg"
      >
      <Flex
        direction='column'
        alignItems='center'
        justify='center'
        align='center'  
        h='100%'
        bg='rgb(0 0 0 / 50%)'
        p={['0 10%', null, 'o 20%']}
        w={{ md: 40 }}
        borderRadius="lg"
      >
      <Heading
        color='white'
        textTransform='uppercase'
        textAlign='center'
        fontWeight='light'
        letterSpacing='5px'
        fontSize={{ base: "xl", md: "2xl" }}
          >
            Domina tu cuerpo
            </Heading>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing='40px'
              w={['100%', null, 'auto']}
            >
              <Button
                Variant='outline'
                size='lg'
                textTransform='uppercase'
                fontWeight='light'
                borderRadius='0'
                bg='0'
                color='white'
                letterSpacing='1px'
                _hover={{
                  color:'black',
                  bg:'white',
                  }}

              >
                Ver detalle
              </Button>
              <Button
                Variant='outline'
                size='lg'
                textTransform='uppercase'
                fontWeight='light'
                borderRadius='0'
                bg='0'
                color='white'
                letterSpacing='1px'
                _hover={{
                  color:'black',
                  bg:'white'
                }}

              >
                Ver video
              </Button>
            </Stack>
      </Flex>
      </Box>
  );
}

export default App
