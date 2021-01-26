import React from "react";
import styled from "styled-components/native";
import { Dimensions, Image, ImageSourcePropType } from "react-native";

const windowWidth = (Dimensions.get("window").width * 30) / 100;
const windowHeight = (Dimensions.get("window").height * 20) / 100;

const CoverContainer = styled.View`
  height: ${windowHeight};
  width: ${windowWidth};
`;
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

const Container = styled.View`
  height: 200px;
  width: 100px;
  margin: 10px;
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
  return (
    <Container>
      <Cover source={{ uri: img }}></Cover>
      <Title>{title}</Title>
      <SubTitle>{chapter}</SubTitle>
    </Container>
  );
};