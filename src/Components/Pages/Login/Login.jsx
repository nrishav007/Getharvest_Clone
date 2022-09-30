import { Box, Button, Center, Divider, Flex, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import { useRef } from "react";
import goog from "./icons8-google.svg"
const Login = () => {
    let email = useRef();
    let pass = useRef();

    const login = async () => {
        // let obj = {
        //     "email": email.current.value,
        //     "password": pass.current.value
        // }
        axios.post(`https://reqres.in/api/login`, {
            "email": email.current.value,
            "password": pass.current.value
        }).then(res => { alert(res.data.token) })
        //         let data=await fetch(`https://reqres.in/api/login`,{
        //             method:"POST",
        //             headers:{
        //                 "Content-Type":"application/json"
        //             },
        //             body:JSON.stringify(obj)
        //         });
        // let res=await data.json();
        // console.log(res);
    }
    return (
        <Center>
            <Flex direction='column' alignItems='center'>
                <Text fontSize='27px' fontWeight='bold' margin='20px 0px'>Sign in to Harvest</Text>
                <Box border='1px solid rgba(250,93,0,100%)' w='550px' h='auto' padding='30px 0px'>
                    <Center>
                        <Box border='1px solid black' h='50px' w='90%' marginBottom='20px' marginTop='10px' borderRadius='14px'>
                            <Center>
                                <Flex justifyContent='space-between'>
                                    <img src={goog} alt="vhus"></img>
                                    <Text fontSize='20px'>Sign in with Google</Text>
                                </Flex>
                            </Center>
                        </Box>
                    </Center>
                    <Center>
                        <Flex >
                            <Center>
                                <Divider width='150px' />
                                <Text>or with your email below</Text>
                                <Divider width='150px' />
                            </Center>
                        </Flex>
                    </Center>
                    <Center>
                        <Flex gap='10px' direction='column' w='90%' marginTop='30px'>
                            <Input ref={email} placeholder="Work email" value='eve.holt@reqres.in'></Input>
                            <Input ref={pass} placeholder="Password" value='cityslicka'></Input>
                            <Button onClick={login} color='#fff' backgroundColor='#188433' marginTop='20px'>Sign in</Button>
                        </Flex>
                    </Center>
                </Box>
                <Box marginTop='30px'>
                    <Flex gap='20px'>
                        <Text>Forgot password?</Text>
                        <Text>Terms of service</Text>
                        <Text>Privacy policy</Text>
                    </Flex>
                </Box>
            </Flex>
        </Center>
    )
}
export { Login }