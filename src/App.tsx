import * as React from "react";
import { ChakraProvider, theme, Container } from "@chakra-ui/react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import BookList from "./components/BookList";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Container maxW="1250px">
      <Header />
      <BookList />
      <Footer />
    </Container>
  </ChakraProvider>
);
