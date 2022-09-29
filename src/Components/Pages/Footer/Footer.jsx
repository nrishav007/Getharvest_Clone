import { Box, Center, Flex, Stack } from "@chakra-ui/react";
import fot from "./fot.svg";
import './Footer.css';
const Footer = () => {

    return (
        <Box id="foter">


            <Flex>
                <Box id="lgo">
                    <img src={fot} alt="bg"></img>
                </Box>
                <Flex gap='150px'>
                    <Stack>
                        <Box className="txt" marginTop='70px' marginBottom='15px'>Harvest</Box>
                        <Box className="txt">Home</Box>
                        <Box className="txt">Why Harvest?</Box>
                        <Box className="txt">Features</Box>
                        <Box className="txt">Pricing</Box>
                        <Box className="txt">Integrations</Box>
                        <Box className="txt">Apps</Box>
                        <Box className="txt">Security</Box>
                    </Stack>
                    <Stack>
                        <Box className="txt" marginTop='70px' marginBottom='15px'>Community</Box>
                        <Box className="txt">Customer stories</Box>
                        <Box className="txt">Resources</Box>
                        <Box className="txt">Webinars</Box>
                        <Box className="txt">Help & support</Box>
                        <Box className="txt">Integrate with Harvest</Box>
                        <Box className="txt">Time Well Spent</Box>
                        <Box className="txt">Time in This Time</Box>
                    </Stack>
                    <Stack>
                        <Box className="txt" marginTop='70px' marginBottom='15px'>Company</Box>
                        <Box className="txt">About us</Box>
                        <Box className="txt">Blog</Box>
                        <Box className="txt">Careers</Box>
                        <Box className="txt">Legal</Box>
                        <Box className="txt">Contact us</Box>
                    </Stack>
                </Flex>
            </Flex>
            <Center >
                <button id='fot'>
                    We also make: <strong>Harvest Forecast</strong> – the fast and simple way to schedule your team across projects.</button>
            </Center>


        </Box>
    )
}
export { Footer }