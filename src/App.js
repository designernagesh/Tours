import { Container, Box, Heading, SimpleGrid, Button, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

import { useEffect, useState } from 'react';
import Tours from './components/Tours';
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [ tourPlaces, setTourPlaces ] = useState([]);

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTourPlaces(tours);
    }
    catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours();  
   }, [])

   const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW='6xl'>

      <Button position='absolute' top='20px' right='20px' onClick={toggleColorMode}>
        {colorMode === <FaSun /> ? <FaMoon /> : <FaSun />}
      </Button>
      
      <Box display='flex' alignItems='center' justifyContent='space-between'>
        <Heading as='h1' align='center' my='30px'>Our Tours</Heading>
        <Button my='30px' onClick={ fetchTours }> Reload the Tours</Button>
      </Box>

      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
        <Tours tourPlaces={tourPlaces} setTourPlaces={setTourPlaces} />
      </SimpleGrid>
      
    </Container>
  );
}

export default App;
