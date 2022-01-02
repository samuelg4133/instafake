import React from "react";
import { FlatList, ScrollView } from "react-native";
import { Card } from "../../components";

import ronaldinho from "../../assets/images/ronaldinho.jpg";
import ronaldinhoPost from "../../assets/images/ronaldinho-post.jpeg";

const data = [
  {
    id: 1,
    avatar: ronaldinho,
    postBackground: ronaldinhoPost,
    postTitle: "Grande momento da minha vida :)",
    username: "Ronaldinho",
  },
  {
    id: 2,
    avatar: ronaldinho,
    postBackground: ronaldinhoPost,
    postTitle: "Grande momento da minha vida :)",
    username: "Ronaldinho",
  },
  {
    id: 3,
    avatar: ronaldinho,
    postBackground: ronaldinhoPost,
    postTitle: "Grande momento da minha vida :)",
    username: "Ronaldinho",
  },
  {
    id: 4,
    avatar: ronaldinho,
    postBackground: ronaldinhoPost,
    postTitle: "Grande momento da minha vida :)",
    username: "Ronaldinho",
  },
  {
    id: 5,
    avatar: ronaldinho,
    postBackground: ronaldinhoPost,
    postTitle: "Grande momento da minha vida :)",
    username: "Ronaldinho",
  },
];

export function Home(): JSX.Element {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => {
        return (
          <Card
            postBackground={item.postBackground}
            avatar={item.avatar}
            username={item.username}
            postTitle={item.postTitle}
          />
        );
      }}
    />
  );
}
