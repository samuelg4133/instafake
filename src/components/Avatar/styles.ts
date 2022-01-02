import styled from "styled-components/native";

type ContainerProps = {
  marginRight: number;
};

export const Container = styled.Image<ContainerProps>`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin-right: ${(props) => `${props.marginRight}px`};
`;
