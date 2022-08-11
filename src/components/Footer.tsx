import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.900", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      pos={"fixed"}
      bottom="0"
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
        <Text color={"white"} fontWeight={"bold"} fontSize={"20px"} mt={"20px"}>
          @ 2022 TALLYSIGHT INC.RESERVED
        </Text>
        <Text fontSize={"14px"} fontWeight="bold" color={"grey"} mb={"40px"}>
          If you or someone you know has a gambling problem and wants help, call
          1-800-Gambler. You must be 21 years or older to place a bet.
        </Text>
      </Container>
    </Box>
  );
}
