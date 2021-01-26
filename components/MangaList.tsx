import React from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { Card } from "../components/Card";

const ListContainer = styled.View`
  flex: 1;
`;

export const MangaList = ({
  manga,
}: {
  manga: {
    title: string;
    chapter: string;
    img: string;
  }[];
}) => {
  return (
    <ListContainer>
      <FlatList
        data={manga}
        horizontal={false}
        numColumns={3}
        renderItem={({ item }) => (
          <Card title={item.title} chapter={item.chapter} img={item.img}></Card>
        )}
      ></FlatList>
    </ListContainer>
  );
};
