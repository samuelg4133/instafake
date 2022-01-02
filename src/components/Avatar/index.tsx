import { Container } from "./styles";
import { ImageSourcePropType } from "react-native";

type AvatarProps = {
  marginRight?: number;
  source: ImageSourcePropType;
};

export function Avatar({ marginRight, source }: AvatarProps): JSX.Element {
  return <Container marginRight={marginRight || 0} source={source} />;
}
