import styled from "styled-components/native";

type SubtitleProps = {
  marginLeft?: number;
};

export const Container = styled.View`
  background-color: #fff;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  flex: 1;
`;

export const Content = styled.Image`
  height: 480px;
`;

export const Header = styled.View`
  justify-content: space-between;
  flex: 1;
  padding: 12px 24px;
`;

export const Profile = styled.View`
  flex-direction: row;
`;

export const Subtitle = styled.Text<SubtitleProps>`
  font-size: 12px;
  font-weight: 400;
  margin-left: ${(props) =>
    props.marginLeft ? `${props.marginLeft}px` : "0px"};
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;
