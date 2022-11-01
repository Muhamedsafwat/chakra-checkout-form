import React from "react";
import { Container, Flex } from "@chakra-ui/react";

//importing sections
import Cart from "../components/sections/Cart";
import Details from "../components/sections/Details";

const indexPage = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex
        h={{ base: null, md: "100vh" }}
        direction={{ base: "column-reverse", md: "row" }}
        py={[0, 10, 20]}
      >
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
};

export default indexPage;
