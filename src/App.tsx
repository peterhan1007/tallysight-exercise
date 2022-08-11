import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Container,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

import { Logo } from "./Logo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookList from "./components/BookList";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Container maxW="1250px">
      {/* <ColorModeSwitcher justifySelf="flex-end" /> */}

      {/* <Logo h="40vmin" pointerEvents="none" /> */}
      <Header />
      <BookList />
      <Footer />
    </Container>
  </ChakraProvider>
);
