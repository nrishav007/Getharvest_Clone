import { Center, Text } from "@chakra-ui/react"

const Nav=({data})=>{
    return (
        <Center w='150px' className="navdta">
                    <Text>{data}</Text>
                </Center>
    )
}
export {Nav}