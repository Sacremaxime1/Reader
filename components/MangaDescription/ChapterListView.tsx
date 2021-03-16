import * as React from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ChapterListView = styled.View``;

const Chapter = styled.TouchableOpacity`
  padding: 15px;
  border-bottom-width: 1px;
`;

const ChapterTitle = styled.Text`
  font-size: 15px;
`;

export const ChapterList = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={MockData}
      renderItem={({ item }) => (
        <Chapter onPress={() => navigation.navigate("Reader")}>
          <ChapterTitle>
            chap. {item.chapter}: {item.title}
          </ChapterTitle>
        </Chapter>
      )}
    ></FlatList>
  );
};

const MockData = [
  {
    chapter: "1",
    title: "his name is alladin",
  },
  {
    chapter: "2",
    title: "his name is alibaba",
  },
  {
    chapter: "3",
    title: "aladdin & alibaba",
  },
  {
    chapter: "4",
    title: "dungeon diving",
  },
  {
    chapter: "1",
    title: "his name is alladin",
  },
  {
    chapter: "2",
    title: "his name is alibaba",
  },
  {
    chapter: "3",
    title: "aladdin & alibaba",
  },
  {
    chapter: "4",
    title: "dungeon diving",
  },
  {
    chapter: "1",
    title: "his name is alladin",
  },
  {
    chapter: "2",
    title: "his name is alibaba",
  },
  {
    chapter: "3",
    title: "aladdin & alibaba",
  },
  {
    chapter: "4",
    title: "dungeon diving",
  },
  {
    chapter: "1",
    title: "his name is alladin",
  },
  {
    chapter: "2",
    title: "his name is alibaba",
  },
  {
    chapter: "3",
    title: "aladdin & alibaba",
  },
  {
    chapter: "4",
    title: "dungeon diving",
  },
  {
    chapter: "1",
    title: "his name is alladin",
  },
  {
    chapter: "2",
    title: "his name is alibaba",
  },
  {
    chapter: "3",
    title: "aladdin & alibaba",
  },
  {
    chapter: "4",
    title: "dungeon diving",
  },
];
