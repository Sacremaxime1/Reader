import * as React from "react";
import styled from "styled-components/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { DescriptionView } from "../components/MangaDescription/DescriptionView";
import { ChapterList } from "../components/MangaDescription/ChapterListView";

const Container = styled.View`
  flex: 1;
`;

const Header = styled.ImageBackground`
  justify-content: center;
  height: 35%;
  width: 100%
  align-items: center;
  `;

const MainImage = styled.Image`
  height: 55%;
  width: 30%;
  position: absolute;
`;

const TabContainer = styled.View`
  flex: 1;
`;

const MangaTitle = styled.Text`
  position: absolute;
  font-size: 20px;
  color: white;
  font-weight: bold;
  bottom: 10%;
`;

const Filter = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
`;

const Tab = createMaterialTopTabNavigator();

export default function MangaDescription() {
  return (
    <Container>
      <Header
        source={{
          uri:
            "https://upload.wikimedia.org/wikipedia/en/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg",
        }}
        blurRadius={5}
      >
        <Filter></Filter>
        <MainImage
          source={{
            uri:
              "https://upload.wikimedia.org/wikipedia/en/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg",
          }}
        ></MainImage>
        <MangaTitle>One Piece</MangaTitle>
      </Header>
      <TabContainer>
        <Tab.Navigator>
          <Tab.Screen name="Description" component={DescriptionView} />
          <Tab.Screen name="Chapters" component={ChapterList} />
        </Tab.Navigator>
      </TabContainer>
    </Container>
  );
}
