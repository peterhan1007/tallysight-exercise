import React, { useState, useEffect, ReactNode } from "react";
import {
  Stack,
  Box,
  Text,
  useColorModeValue,
  Flex,
  UnorderedList,
  ListItem,
  Button,
  Image,
} from "@chakra-ui/react";

interface BookType {
  image: string;
  title: string;
  infos: Array<string>;
  button_title: string;
}
const BookList: React.FC = (): JSX.Element => {
  const [data, setData] = useState([] as BookType[]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const res = await fetch(
      "https://api.airtable.com/v0/appDFOzemd24MG2CZ/sportsbooks",
      {
        headers: {
          authorization: "Bearer keyv05VZXGSFfVKO4",
        },
      }
    );

    if (!res.ok) {
      console.error("Error");
      return;
    }

    await res.json().then((res) => {
      setData(res.records);
    });
  };

  const Item = ({ book }: { book: ReactNode | any }) => {
    const bookData = book.fields;

    return (
      <Box borderRadius={"14px"} border="2px" borderColor="gray.200" my="5px">
        <Box
          fontWeight={"bold"}
          mb={"4"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          px={"25px"}
          py={"20px"}
        >
          <Flex alignItems={"center"}>
            <Flex>
              <Box mr={"50px"}>
                <Image
                  width="180px"
                  height="80px"
                  src={bookData.Logo[0].url}
                ></Image>
              </Box>
              <Box mr={"30px"}>
                <Text fontSize={"24px"}>{bookData.Promotion}</Text>
                <UnorderedList>
                  <ListItem>Up to $1, 500 Risk-Free First Bet</ListItem>
                  <ListItem>First Bet Insurance Up To $1, 500</ListItem>
                </UnorderedList>
              </Box>
            </Flex>
            <Box ml="150px">
              <Button
                py={"30px"}
                width="170px"
                fontSize={"26px"}
                colorScheme="messenger"
              >
                {bookData.CTA}
              </Button>
            </Box>
          </Flex>
        </Box>
      </Box>
    );
  };

  return (
    <Stack mt={"50px"} px={"150px"}>
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
      <Stack spacing={{ base: 4, sm: 6 }} direction={"column"}>
        {data?.map((book: BookType, index) => {
          return <Item book={book} key={index} />;
        })}
      </Stack>
    </Stack>
  );
};

export default BookList;
