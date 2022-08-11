import React, { ReactNode, useEffect } from "react";
import {
  Stack,
  Box,
  List,
  ListItem,
  Text,
  StackDivider,
  useColorModeValue,
  Button,
  Link,
  Flex,
} from "@chakra-ui/react";

const BookList: React.FC = (): JSX.Element => {
  const Item = () => {
    return (
      <Box>
        <Box
          fontSize={{ base: "18px", lg: "20px" }}
          fontWeight={"bold"}
          mb={"4"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        ></Box>
      </Box>
    );
  };

  return (
    <Stack mt={"50px"}>
      <Box as={"header"}>
        <Text
          color={useColorModeValue("gray.900", "gray.400")}
          fontWeight={"bold"}
          fontSize={"26px"}
        >
          BEST SPORTSBOOK OFFERS IN STATE
        </Text>
        <Text
          color={useColorModeValue("gray.900", "gray.400")}
          fontWeight={"bold"}
          fontSize={"16px"}
        >
          Neighbor state is 234 miles away from you
        </Text>
      </Box>
      <Stack
        spacing={{ base: 4, sm: 6 }}
        direction={"column"}
        divider={
          <StackDivider
            borderColor={useColorModeValue("gray.200", "gray.600")}
          />
        }
      >
        <Item />
      </Stack>
    </Stack>
  );
};

export default BookList;
