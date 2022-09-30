import {Box, Center, Divider, Flex, Stack, Text} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import { Nav } from './Nav';
import "./Navbar.css"
const Navbar = () => {

    const arr = ["Why Harvest?", "Features", 'Customers', 'Integrations', 'Pricing'];

    return (
        <Box id='stk' position='sticky' top='0' backgroundColor='white'>
        <Stack  direction='row' height='100px' width='900px' marginLeft='50px' alignItems='center'>
            <img src={logo} className="App-logo" alt="logo" />
            <Divider orientation='vertical' h='60px' />
            <Flex gap='20px' w='700px'>
                {
                    arr.map((el) => (
                        <Nav data={el} />
                    ))
                }
            </Flex>
            <Center  className="navdta">
                <Link to="/login">
                <Text marginLeft='70px' w='55px' marginRight='-15px'>Sign in</Text>
                </Link>
                </Center>
                <Center  padding='20px' >
                    <Link to="/signup" id='reg'>
                        Try Harvest Free
                    </Link>
                </Center>
        </Stack>
        </Box>
        
    )
}
export { Navbar }



