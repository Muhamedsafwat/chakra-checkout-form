import React from "react";
import {
  VStack,
  Heading,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
  HStack,
  AspectRatio,
  Image,
  Divider,
} from "@chakra-ui/react";

const Cart = () => {
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.50", "whiteAlpha.50");
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400");
  return (
    <VStack spacing={10} p={10} align="flex-start" w="full" h="full" bg={bg}>
      <VStack spacing={3} align="flex-start">
        <Heading size="2xl">Your cart.</Heading>
        <Text>
          If price is too hard on your eyes,
          <Button
            onClick={toggleColorMode}
            variant="link"
            display="inline"
            fontWeight="bold"
          >
            try changing the theme.
          </Button>
        </Text>
      </VStack>
      <HStack w="full" spacing={6}>
        <AspectRatio ratio={1} w={24}>
          <Image borderRadius="md" src="./assets/skate-board.png" />
        </AspectRatio>
        <HStack justifyContent="space-between" w="full">
          <VStack w="full" spacing={0} align="flex-start">
            <Heading size="md">Penny board</Heading>
            <Text color={secondaryTextColor}>PNYCOMP27541</Text>
          </VStack>
          <Heading size="sm">$119.00</Heading>
        </HStack>
      </HStack>
      <VStack w="full" spacing={4}>
        <HStack w="full" justifyContent="space-between">
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Heading size="sm">$119.00</Heading>
        </HStack>
        <HStack w="full" justifyContent="space-between">
          <Text color={secondaryTextColor}>Shipping</Text>
          <Heading size="sm">$19.99</Heading>
        </HStack>
        <HStack w="full" justifyContent="space-between">
          <Text color={secondaryTextColor}>{"Taxes (estimated)"}</Text>
          <Heading size="sm">$23.80</Heading>
        </HStack>
      </VStack>

      <Divider />
      <HStack w="full" justifyContent="space-between">
        <Text color={secondaryTextColor}>Total</Text>
        <Heading size="lg">$162.79</Heading>
      </HStack>
    </VStack>
  );
};

export default Cart;
