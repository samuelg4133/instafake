import React, { useState } from "react";

import {
  ImageSourcePropType,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { Container, Content, Header, Subtitle, Title } from "./styles";
import { Row } from "../Row";
import { Avatar } from "../Avatar";

type CardProps = {
  postBackground: ImageSourcePropType;
  avatar: ImageSourcePropType;
  username: string;
  postTitle: string;
};

export function Card({
  avatar,
  postBackground,
  postTitle,
  username,
}: CardProps): JSX.Element {
  const [isFilled, setIsFilled] = useState(false);

  const handleSetIsFilled = () => {
    setIsFilled(!isFilled);
  };

  return (
    <Container>
      <Header>
        <Row align="center">
          <Avatar marginRight={12} source={avatar} />
          <View>
            <Title>{username}</Title>
            <Subtitle>{postTitle}</Subtitle>
          </View>
        </Row>
      </Header>
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator>
        <Content source={postBackground} />
      </ScrollView>
      <Row padding={12}>
        <TouchableWithoutFeedback onPress={handleSetIsFilled}>
          {isFilled ? (
            <AntDesign name="heart" size={28} />
          ) : (
            <AntDesign name="hearto" size={28} />
          )}
        </TouchableWithoutFeedback>
      </Row>
    </Container>
  );
}
