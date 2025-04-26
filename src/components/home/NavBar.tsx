import { GridItem, Text, Flex, Box, Image, Link } from "@chakra-ui/react";
import logo from "../../assets/icon/logo.svg";

const NavBar = () => {
  return (
    <GridItem
      h={14}
      area={"nav"}
      position={"absolute"}
      width={"full"}
      zIndex={1000}
      style={{
        background: "rgba( 26, 11, 46, 0.4 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 6px )",
        WebkitBackdropFilter: "blur( 6px )",
        //-webkit-backdrop-filter: "blur( 6px )",
        //borderRadius: "10px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
      }}
    >
      <Flex px={6} h={"full"} align={"center"} justify={"space-around"}>
        <Box flex={3} justifyItems={"center"} alignContent={"center"}>
          <Image src={logo} h={8} />
        </Box>
        <Flex flex={2} align={"center"} gap={{ lg: 20, md: 10, base: 6 }}>
          <Link href="#home">
            <Text color={"white"} cursor={"pointer"} fontSize={"md"}>
              Home
            </Text>
          </Link>
          <Link href="#home">
            <Text color={"white"} cursor={"pointer"} fontSize={"md"}>
              About
            </Text>
          </Link>
          <Link href="#work_experience">
            <Text color={"white"} cursor={"pointer"} fontSize={"md"}>
              Experience
            </Text>
          </Link>
          <Link href="#skills">
            <Text color={"white"} cursor={"pointer"} fontSize={"md"}>
              Skills
            </Text>
          </Link>
        </Flex>
      </Flex>
    </GridItem>
  );
};

export default NavBar;
