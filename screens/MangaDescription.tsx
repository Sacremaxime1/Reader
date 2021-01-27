import * as React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: blue;
`;

const Header = styled.View`
  height: 40%;
  width: 100%
  background-color: red;
`;

export default function MangaDescription() {
  return (
    <Container>
      <Header></Header>
    </Container>
  );
}
