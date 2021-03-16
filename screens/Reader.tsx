import * as React from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { Dimensions } from "react-native";

const Mock = [
  {
    img:
      "https://upload.wikimedia.org/wikipedia/en/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg",
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/5/53/Bleach_cover_01.jpg",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/c/cf/Vagabond21.jpg",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/c/cd/MagiCover01.jpg",
  },
];

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Container = styled.View`
  flex: 1;
  background-color: blue;
`;

const Page = styled.Image`
  height: ${windowHeight};
  width: ${windowWidth};
  justify-content: center;
`;

export default function Reader() {
  return (
    <Container>
      <FlatList
        data={Mock}
        renderItem={({ item }) => <Page source={{ uri: item.img }}></Page>}
      ></FlatList>
    </Container>
  );
}
