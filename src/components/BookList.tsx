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
import haversine from "haversine-distance";

import states from "../states.json";

interface BookType {
  image: string;
  title: string;
  infos: Array<string>;
  button_title: string;
}

interface InfoType {
  city: string;
  country: string;
  ip: string;
  loc: string;
  org: string;
  region: string;
  timezone: string;
}

interface StateType {
  name: string;
  abbreviation: string;
  latitude: number;
  longitude: number;
}

const BookList: React.FC = (): JSX.Element => {
  const [data, setData] = useState([] as BookType[]);
  const [myInfo, setMyInfo] = useState({} as InfoType);
  const [minDistance, setMinDistance] = useState(Infinity);

  useEffect(() => {
    getBooks();
    getMyInfo();
    getLatestDistance();
  }, []);

  const getLatestDistance = async () => {
    states.map((state: StateType) => {
      const [latitude, longitude] = myInfo.loc
        .split(",")
        .map((v) => parseFloat(v));

      const distance = haversine(
        { latitude, longitude },
        { latitude: state.latitude, longitude: state.longitude }
      );

      if (distance < minDistance) {
        setMinDistance(distance);
      }
    });
  };

  const getMyInfo = async () => {
    const res = await fetch("https://ipinfo.io/", {
      headers: {
        authorization: "Bearer 3f26802b4fde0f",
      },
    });

    if (!res.ok) {
      console.error("Error");
      return;
    }

    await res.json().then((res) => {
      setMyInfo(res);
    });
  };

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
          <Image width="150px" height="40px" src={bookData.Logo[0].url}></Image>
          <Box mr={"30px"} ml={"30px"}>
            <Text fontSize={"24px"}>{bookData.Promotion}</Text>
            <UnorderedList>
              {bookData["Promo Details"].map(
                (detail: string, index: number) => {
                  return <ListItem key={index}>{detail}</ListItem>;
                }
              )}
            </UnorderedList>
          </Box>
          <Box ml={"auto"}>
            <Button
              py={"30px"}
              width="170px"
              fontSize={"26px"}
              colorScheme="messenger"
            >
              {bookData.CTA}
            </Button>
          </Box>
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
          BEST SPORTSBOOK OFFERS IN {myInfo?.city}
        </Text>
        <Text
          color={useColorModeValue("gray.900", "gray.400")}
          fontWeight={"bold"}
          fontSize={"16px"}
        >
          Neighbor state is {minDistance / 1.609} miles away from you
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
