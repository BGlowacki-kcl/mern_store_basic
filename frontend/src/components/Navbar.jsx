import { Button, Container, Flex, Text, HStack, useColorMode } from "@chakra-ui/react" //rafce - for quick code snippet
import { Link } from "react-router-dom";

import { CiSquarePlus } from "react-icons/ci";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1140px"} px={4}>
        <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
              base:"column",
              sm:"row",
            }}
        >
          <Text
            fontSize={{ base: "22", sm: "28" }}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={"center"}
            bgGradient={"linear(to-r, cyan.400, blue.500)"}
            bgClip={"text"}
          >
            <Link to={"/"}>Product store</Link>
          </Text>

          <HStack spacing={2} alignItems={"center"}>
            <Link to="/create">
              <Button>
                <CiSquarePlus fontSize={20} />
              </Button>
            </Link>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <FaMoon /> : <FaSun />}
            </Button>
          </HStack>
        </Flex>
    </Container>
  )
}

export default Navbar