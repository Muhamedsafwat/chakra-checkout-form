import React from "react";
import {
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

const Form = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  return (
    <SimpleGrid columns={2} rowGap={6} columnGap={3} w="full">
      <GridItem colSpan={colSpan}>
        <FormControl>
          <FormLabel>First name</FormLabel>
          <Input placeholder="Ex: John" />
        </FormControl>
      </GridItem>
      <GridItem colSpan={colSpan}>
        <FormControl>
          <FormLabel>Last name</FormLabel>
          <Input placeholder="Ex: Doe" />
        </FormControl>
      </GridItem>
      <GridItem colSpan={2}>
        <FormControl>
          <FormLabel>Adress</FormLabel>
          <Input placeholder="Blvd. Broken Dreams 21" />
        </FormControl>
      </GridItem>
      <GridItem colSpan={colSpan}>
        <FormControl>
          <FormLabel>City</FormLabel>
          <Input placeholder="San Francisco" />
        </FormControl>
      </GridItem>
      <GridItem colSpan={colSpan}>
        <FormControl>
          <FormLabel>Country</FormLabel>
          <Select>
            <option value="Egypt">Egypt</option>
            <option value="USA">USA</option>
            <option value="Germany">Germany</option>
            <option value="UK">UK</option>
          </Select>
        </FormControl>
      </GridItem>
      <GridItem colSpan={2}>
        <Checkbox defaultChecked>Ship to the billing address.</Checkbox>
      </GridItem>
      <GridItem colSpan={2}>
        <Button colorScheme="brand" size="lg" w="full">
          Place Order
        </Button>
      </GridItem>
    </SimpleGrid>
  );
};

export default Form;
