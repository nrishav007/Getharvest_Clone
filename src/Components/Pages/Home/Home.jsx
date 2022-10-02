import { StarIcon } from "@chakra-ui/icons"
import { Box, Button, Center, Flex, Input, Stack, Text } from "@chakra-ui/react"
import { Footer } from "../Footer/Footer"

const Home = () => {

    return (
        <Stack>
            <Flex gap={'10px'} justifyContent='right'>
                <Box marginTop={'70px'} marginLeft={'40px'} w='450px'>
                    <Box display="flex" mt="2" alignItems="center">
                        {new Array(5).fill("").map((_, i) => (
                            <StarIcon
                                key={i}
                                color={i < 4 ? "rgba(250,93,0,100%)" : "rgba(250,93,0,40%)"}
                            />
                        ))}
                        <Box as="span" ml="2" color="black" fontSize="sm" marginRight={'10px'}>
                            4.6
                        </Box>
                        <Box color={'gray.400'}>(748 reviews)</Box>
                    </Box>
                    <Box fontSize={'48px'} marginBottom='24px'>Time tracking your team wants to use</Box>
                    <Box fontSize={'18px'} color={'gray.500'}>Finally, an easy way to track time across projects. Reports, invoicing, and more. All in just a few clicks.</Box>
                    <Flex gap={'10px'} marginTop='15px'>
                        <Input placeholder="Work email" />
                        <Button w={'200px'} borderRadius='14px' backgroundColor={'rgba(250,93,0,100%)'} color='#fff' >Get started</Button>
                    </Flex>
                </Box>
                <Box>
                    <img width='900px' height='900px' src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1001-Harvest-Home-SPZ-Hero/desktop-hero-img.png" alt="top1"></img>
                </Box>
            </Flex>
            <Box >
            <Flex marginLeft={'80px'} marginTop='30px'>
                    <Text color='#FA5D00'>70,000+</Text>
                    <Text>companies track time with Harvest</Text>
                    <Text marginLeft='5px' marginTop='12.5px' borderTop='1px solid #FA5D00' w='70%'></Text>
                </Flex>
                <Center marginTop='20px' w='85%' marginLeft='80px'>
                    <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/Test-3001-free-trial-spz-baseline/social-proofs_2x.png" alt="prom"></img>
                </Center>
                </Box>
                <Box>
                    <Text marginBottom={'90px'} marginLeft='5px' marginTop='40px' borderTop='1px solid #FA5D00' w='99%'></Text>
                </Box>
                <Box>
                    <Flex gap={'20px'} direction={'column'} marginLeft={'90px'}>
                        <Text fontSize={'20px'} fontWeight={'600'} color={'#FA5D00'}>FEATURES</Text>
                        <Text fontSize={'42px'}>Everything you need to keep your team ticking</Text>
                        <Text marginBottom={'40px'} fontSize={'26px'}>Time tracking software that helps you keep time and get insights.</Text>
                    </Flex>
                </Box>
                <Flex>
                    <Flex  direction={'column'} marginLeft={'90px'} gap='50px' marginRight={'40px'}>
                        <Box marginTop={'20px'} borderRadius={'20px'} padding={'20px'} border='1px solid rgba(250,93,0,100%)'>
                            <Flex w={'350px'} >
                            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/nav-time.svg" alt="b1" />
                            <Box marginLeft={'20px'}>
                               <Text fontSize={'30px'}>Time tracking</Text> 
                               <Text fontWeight={'500'}>Simple and intuitive time tracking your team will love.</Text>
                            </Box>
                            </Flex>
                        </Box>

                        <Box borderRadius={'20px'} padding={'20px'} border='1px solid rgba(250,93,0,100%)'>
                            <Flex w={'390px'} >
                            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/nav-reporting.svg" alt="b1" />
                            <Box marginLeft={'20px'}>
                               <Text fontSize={'30px'}>Reports & analysis</Text> 
                               <Text fontWeight={'500'}>Unlock the insights that help your business thrive.</Text>
                            </Box>
                            </Flex>
                        </Box>

                        <Box borderRadius={'20px'} padding={'20px'} border='1px solid rgba(250,93,0,100%)'>
                            <Flex w={'350px'} >
                            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/nav-invoicing.svg" alt="b1" />
                            <Box marginLeft={'20px'}>
                               <Text fontWeight={'60000'} fontSize={'25px'}>Invoicing & payments</Text> 
                               <Text fontWeight={'500'}>Seamless invoicing and fast online payments.</Text>
                            </Box>
                            </Flex>
                        </Box>
                        
                    </Flex>
                    <Box w={'850px'} border='1px solid rgba(29,30,28,80%) !important'>
                        <img  src="https://www.getharvest.com/hs-fs/hubfs/screenshot-home-timesheets.png?width=1700&name=screenshot-home-timesheets.png" alt="top2"></img>
                    </Box>
                    
                </Flex>
                <Box padding={'40px'} paddingLeft='80px'>
                        <Button w={'200px'}>Discover all feature</Button>
                </Box>
                <Center>
                    <Text marginBottom={'90px'} marginLeft='5px' marginTop='40px' borderTop='1px solid #FA5D00' w='90%'></Text>
                    
                </Center>
            <Footer />
        </Stack>

    )
}
export { Home }