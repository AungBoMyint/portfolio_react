import { Flex, Text } from "@chakra-ui/react";

const NotFoundPage = () => {
  return (
    <Flex
      height={"80vh"}
      direction={"column"}
      alignItems={"center"}
      justify={"center"}
      gap={4}
    >
      <Text fontWeight={"bold"} fontSize={"4xl"} color={"primary.500"}>
        404
      </Text>
      <Text color={"black"} fontWeight={"bold"} fontSize={"2xl"}>
        Page Not Found
      </Text>
      <Text color={"gray.600"}>
        The page you're looking for doesn't exist or has been moved.
      </Text>
    </Flex>
  );
};

export default NotFoundPage;
