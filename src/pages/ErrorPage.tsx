import { Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import { GoQuestion } from "react-icons/go";
import { IoIosRefresh } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import database from "../assets/icon/database.svg";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Flex
      gap={4}
      h={"100vh"}
      direction={"column"}
      alignItems={"center"}
      justify={"center"}
      bg={"white"}
    >
      <Image h={200} src={database} />
      <Text fontWeight={"bold"} fontSize={"3xl"} color={"red"}>
        Internal Error
      </Text>
      <Text fontSize={"lg"} fontWeight={"medium"}>
        Oops! Something went wrong on our end
      </Text>
      <Text mb={4} maxW={"50vw"} textAlign={"center"}>
        We're experiencing some technical difficulties. Our team has been
        notified and is working to fix the issue.
      </Text>
      <Flex alignItems={"center"} gap={4}>
        <Button variant={"solid"} colorScheme="primary">
          <IoIosRefresh />

          <Text ml={2} fontWeight={"normal"}>
            Refresh Page
          </Text>
        </Button>
        <Button color={"gray.600"} variant={"solid"} colorScheme="disable">
          <IoArrowBack />

          <Text onClick={() => navigate("/")} ml={2} fontWeight={"normal"}>
            Return Home
          </Text>
        </Button>
      </Flex>
      <Flex alignItems={"center"} gap={2}>
        <GoQuestion />
        <Text>Still having problems? </Text>
        <Link color={"primary.500"}>Contact Support</Link>
      </Flex>
    </Flex>
  );
};

export default ErrorPage;
