import { Heading, Card, CardBody, CardFooter, Image, Stack, Text, Button } from '@chakra-ui/react';
import { useState } from 'react';

const Tour = ({tour, deleteTour}) => {
    const [ showInfo, setShowInfo ] = useState(false);

    const toggleShow = () => {
        setShowInfo(!showInfo);
    }

    return (
        <Card>
            <CardBody>
                <Image src={tour.image} alt={ tour.name } 
                h='100px'
                w='100%'
                objectFit='cover' mb='20px' />

                <Stack mt='6' spacing='3'>
                    <Heading size='md'> {tour.name} </Heading>
                    <Text>
                    { showInfo ? tour.info : `${tour.info.substring(0, 75)} ...`}  
                    <Button variant='link' onClick={ toggleShow }>
                    { showInfo ? "Show Less" : "Show More" } 
                    </Button>  
                    </Text>
                </Stack>
            </CardBody>
            <CardFooter display='flex' alignItems='center' justifyContent='space-between'>
                <Text mr='50px'>
                    <strong>Price:</strong> { tour.price }/-
                </Text>

                <Button size='sm' onClick={ () => deleteTour(tour.id) }>Not Interested</Button>
            </CardFooter>
        </Card>
    )
}

export default Tour;