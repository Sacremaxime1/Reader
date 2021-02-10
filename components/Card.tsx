import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const windowWidth = (Dimensions.get("window").width * 30) / 100;
const windowHeight = (Dimensions.get("window").height * 20) / 100;

const Cover = styled.Image`
  height: ${windowHeight};
  width: ${windowWidth};
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 15px;
`;

const SubTitle = styled.Text`
  font-size: 10px;
`;

const TouchableOpacity = styled.TouchableOpacity`
  margin: 5px;
`;

export const Card = ({
  title,
  chapter,
  img,
}: {
  title: string;
  chapter: string;
  img: string;
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Description")}>
      <Cover source={{ uri: img }}></Cover>
      <Title>{title}</Title>
      <SubTitle>{chapter}</SubTitle>
    </TouchableOpacity>
  );
};
