import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";

export default function App() {
  return (
    <Container>
      <TitleBar>
        <Title>Open up App.js to start working on your app!!</Title>
        <Name>Ezekiel</Name>
      </TitleBar>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;


const TitleBar = styled.View`
  
`