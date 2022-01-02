import styled from "styled-components/native";

type ContainerProps = {
  align?: "baseline" | "center" | "flex-end" | "flex-start" | "stretch";
  padding?: number;
  marginBottom?: number;
};

export const Container = styled.View<ContainerProps>`
  align-items: ${(props) => (props.align ? props.align : "baseline")};
  flex-direction: row;
  padding: ${(props) => (props.padding ? `${props.padding}px` : "0px")};
  margin-bottom: ${(props) =>
    props.marginBottom ? `${props.marginBottom}px` : "0px"};
`;
