import React from "react";
import { VStack, Heading, Text } from "@chakra-ui/react";

import Form from "../Form";

const Details = () => {
  return (
    <VStack spacing={10} p={10} align="flex-start" w="full" h="full">
      <VStack spacing={3} align="flex-start">
        <Heading size="2xl">Your details.</Heading>
        <Text>If you already have an account, click here to log in.</Text>
      </VStack>
      <Form />
    </VStack>
  );
};

export default Details;
