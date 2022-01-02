import React from "react";
import { FlatList, ScrollView } from "react-native";
import { Avatar, Row } from "../../components";
import { Container, Title } from "./styles";

import messi from "../../assets/images/lionel-messi.jpeg";
import neymar from "../../assets/images/neymar.jpg";
import ronaldinho from "../../assets/images/ronaldinho.jpg";

const data = [
  {
    id: 1,
    avatarUrl: messi,
    name: "Lionel Messi",
  },
  {
    id: 2,
    avatarUrl: neymar,
    name: "Neymar Jr.",
  },
  {
    id: 3,
    avatarUrl: ronaldinho,
    name: "Ronaldinho",
  },
];

export function Friends(): JSX.Element {
  return (
    <Container>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <Row align="center" marginBottom={8}>
              <Avatar source={item.avatarUrl} />
              <Title>{item.name}</Title>
            </Row>
          );
        }}
        keyExtractor={(item) => String(item.id)}
      />
    </Container>
  );
}
