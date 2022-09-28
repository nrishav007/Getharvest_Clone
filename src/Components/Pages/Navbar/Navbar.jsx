import {   Button, Center, Divider, Flex, Stack, Text } from '@chakra-ui/react';
import logo from './logo.svg';
import { Nav } from './Nav';
import "./Navbar.css"
const Navbar = () => {

    const arr = ["Why Harvest?", "Features", 'Customers', 'Integrations', 'Pricing']
    return (
        <Stack direction='row' height='100px' width='900px' marginLeft='50px' alignItems='center' >
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
                    <Text marginLeft='70px' w='55px' marginRight='-15px'>Sign in</Text>
                </Center>
                <Center  padding='20px' >
                    <Button w='160px' id='reg'>
                        Try Harvest Free
                    </Button>
                </Center>

        </Stack>
    )
}
export { Navbar }



