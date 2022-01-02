import styled from "styled-components/native";

export const Button = styled.TouchableHighlight`
  align-items: center;
  background-color: #00ddff;
  border-color: pink;
  border-width: 4px;
  border-radius: 8px;
  flex: 1;
  padding: 8px 16px;
  margin-top: 16px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
`;

export const Container = styled.View`
  background-color: #fff;
  flex: 1;
  padding: 24px;
`;

export const Input = styled.TextInput`
  font-size: 16px;
  flex: 1;
  padding: 8px 16px;
  background-color: #f6f6f6;
  border-color: #d2d2d2;
  border-width: 1px;
  border-radius: 8px;
`;

export const Label = styled.Text`
  margin-left: 4px;
  margin-top: 8px;
`;

export const Loading = styled.Text`
  color: #55ddff;
  font-size: 18px;
  font-weight: 700;
  margin-top: 16px;
  text-align: center;
`;

export const Success = styled.Text`
  color: #11ee33;
  font-size: 18px;
  font-weight: 700;
  margin-top: 16px;
  text-align: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
`;
