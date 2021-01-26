import * as React from "react";
import styled from "styled-components/native";
import { MangaList } from "../components/MangaList";

const mocksData = [
  {
    title: "one piece",
    chapter: "ch 1000",
    img:
      "https://upload.wikimedia.org/wikipedia/en/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg",
  },
  {
    title: "naruto",
    chapter: "ch 500",
    img:
      "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
  },
  {
    title: "Bleach",
    chapter: "ch 600",
    img: "https://upload.wikimedia.org/wikipedia/en/5/53/Bleach_cover_01.jpg",
  },
  {
    title: "Vagabond",
    chapter: "ch 300",
    img: "https://upload.wikimedia.org/wikipedia/en/c/cf/Vagabond21.jpg",
  },
  {
    title: "magi",
    chapter: "ch 400",
    img: "https://upload.wikimedia.org/wikipedia/en/c/cd/MagiCover01.jpg",
  },
  {
    title: "one piece",
    chapter: "ch 1000",
    img:
      "https://upload.wikimedia.org/wikipedia/en/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg",
  },
  {
    title: "naruto",
    chapter: "ch 500",
    img:
      "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
  },
  {
    title: "Bleach",
    chapter: "ch 600",
    img: "https://upload.wikimedia.org/wikipedia/en/5/53/Bleach_cover_01.jpg",
  },
  {
    title: "Vagabond",
    chapter: "ch 300",
    img: "https://upload.wikimedia.org/wikipedia/en/c/cf/Vagabond21.jpg",
  },
  {
    title: "magi",
    chapter: "ch 400",
    img: "https://upload.wikimedia.org/wikipedia/en/c/cd/MagiCover01.jpg",
  },
];

const Container = styled.View`
  flex: 1;
`;

export default function HomePage() {
  return (
    <Container>
      <MangaList manga={mocksData}></MangaList>
    </Container>
  );
}
