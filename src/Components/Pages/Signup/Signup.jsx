import { Box, Button, Center, Divider, Flex, Grid, GridItem, Input, Text } from "@chakra-ui/react"
import goog from "../Login/icons8-google.svg";
import { CheckCircleIcon } from '@chakra-ui/icons';
const Signup = () => {
    return (
        <Box backgroundColor='rgba(250,93,0,20%)' width='full' padding='20px'>
            <Box>
                <Flex gap='20px' justifyContent='space-around' >
                    <Box w='35%'>
                        <Text>SEE WHY 70,000+ COMPANIES TRACK TIME WITH HARVEST</Text>
                        <Text w='500px' fontFamily='WT Monarch Nova' fontSize='48px' lineHeight='56px' color='#1D1E1C' margin='32px 0 24px'>Finally, time tracking your team actually wants to use</Text>
                        <Box marginBottom='20px'>
                            <CheckCircleIcon />
                            <strong>Time Tracking.</strong>
                            Easy & intuitive time tracking that captures all your time without changing the way you work.
                        </Box>

                        <Box marginBottom='20px'>
                            <CheckCircleIcon />
                            <strong>Reports & Analysis.</strong>
                            Instantly create reports across projects. Budgets, time, team capacity, cost breakdowns, and more.
                        </Box>

                        <Box marginBottom='20px'>
                            <CheckCircleIcon />
                            <strong>Invoicing & Payments.</strong>
                            Turn tracked time into invoices. Accept online payments. Sync with QuickBooks and Xero.
                        </Box>
                    </Box>
                    <Box backgroundColor='#fff' w='550px' h='auto' padding='30px 0px' box-shadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' borderRadius='10px'>
                        <Center>
                            <Flex direction='column' justifyContent='center' alignItems='center'>
                            <Text fontSize='45px'>Get a FREE Trial</Text>
                            <Text fontWeight='500' color='gray.700' fontSize='17px'>No credit card required</Text>
                            <Box border='1px solid black' h='50px' width='450px' marginBottom='20px' marginTop='10px' borderRadius='14px'>
                                <Center>
                                    
                                    <Flex justifyContent='space-between'>
                                        <img src={goog} alt="vhus"></img>
                                        <Text fontSize='20px'>Sign in with Google</Text>
                                    </Flex>
                                </Center>
                            </Box>
                            </Flex>
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
                            <Grid marginTop='20px' templateColumns='repeat(2, 1fr)' templateRows='repeat(4, 1fr)' gap={6}>
                                <GridItem w='100%' h='10'>
                                    <Input placeholder="First name"></Input>
                                </GridItem>
                                <GridItem w='100%' h='10'>
                                <Input placeholder="Last name"></Input>
                                </GridItem>
                                <GridItem w='100%' h='10'>
                                <Input placeholder="Company name"></Input>
                                </GridItem>
                                <GridItem w='100%' h='10'>
                                <Input placeholder="Work email"></Input>
                                </GridItem>
                                <GridItem colSpan={2} w='100%' h='10'>
                                <Input placeholder="Password"></Input>
                                </GridItem>
                                <GridItem colSpan={2} w='100%' h='10'>
                                <Button color='#fff' backgroundColor='#188433' w='100%'>Create my account</Button>
                                </GridItem>
                                <GridItem colSpan={2} w='100%' h='10'>
                                <Button color='gray.600' backgroundColor='#fff' w='100%'>Already a customer? Sign in</Button>
                                </GridItem>
                                <GridItem colSpan={2} w='100%' h='10'>
                                <Text fontSize='11px' textAlign='center'>By creating an account, you agree to the Harvest Terms of service and Privacy policy.</Text>
                                </GridItem>
                            </Grid>
                        </Center>
                    </Box>
                </Flex>
                <Flex marginLeft='20px' marginTop='30px'>
                    <Text color='#FA5D00'>70,000+</Text>
                    <Text>companies track time with Harvest</Text>
                    <Text marginLeft='5px' marginTop='12.5px' borderTop='1px solid #FA5D00' w='70%'></Text>
                </Flex>
                <Center marginTop='20px' w='90%' marginLeft='20px'>
                    <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/Test-3001-free-trial-spz-baseline/social-proofs_2x.png" alt="prom"></img>
                </Center>
                
            </Box>
        </Box>
    )
}
export { Signup }