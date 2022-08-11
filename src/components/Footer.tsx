import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <Box
        bg={useColorModeValue("gray.900", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
        mt={"500px"}
      >
        <Container
          as={Stack}
          maxW={"1600px"}
          width={"100%"}
          py={4}
          spacing={4}
          justify={"center"}
          align={"center"}
        >
          <Text
            color={"white"}
            fontWeight={"bold"}
            fontSize={"20px"}
            mt={"20px"}
          >
            @ 2022 TALLYSIGHT INC.RESERVED
          </Text>
          <Text fontSize={"14px"} fontWeight="bold" color={"grey"} mb={"40px"}>
            If you or someone you know has a gambling problem and wants help,
            call 1-800-Gambler. You must be 21 years or older to place a bet.
          </Text>
        </Container>
      </Box>
    </>
  );
}
