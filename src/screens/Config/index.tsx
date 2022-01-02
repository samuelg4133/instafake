import React from "react";
import { ScrollView } from "react-native";
import { useProfile } from "../../hooks/contexts/profile";
import {
  Container,
  Label,
  Input,
  Title,
  Button,
  ButtonText,
  Loading,
  Success,
} from "./styles";

export function Config(): JSX.Element {
  const {
    emailInputRef,
    nameInputRef,
    telephoneInputRef,
    profile,
    handleSubmit,
    isLoading,
    isSubmitted,
  } = useProfile();

  return (
    <ScrollView
      style={{
        backgroundColor: "#fff",
      }}
    >
      <Container>
        <Title>Dados do Perfil</Title>
        <Label>Nome: </Label>
        <Input
          placeholder="Nome de Usuário"
          defaultValue={profile.name}
          ref={nameInputRef}
          onChangeText={(value) => (nameInputRef.current.value = value)}
        />
        <Label>Email: </Label>
        <Input
          placeholder="Email"
          keyboardType="email-address"
          defaultValue={profile.email}
          ref={emailInputRef}
          onChangeText={(value) => (emailInputRef.current.value = value)}
        />
        <Label>Telefone: </Label>
        <Input
          placeholder="Telefone"
          keyboardType="number-pad"
          defaultValue={profile.telephone}
          ref={telephoneInputRef}
          onChangeText={(value) => (telephoneInputRef.current.value = value)}
        />
        <Button onPress={handleSubmit}>
          <ButtonText>Salvar</ButtonText>
        </Button>
        {isLoading && <Loading>Carregando ...</Loading>}
        {isSubmitted && <Success>Dados salvos com sucesso!</Success>}
      </Container>
    </ScrollView>
  );
}
