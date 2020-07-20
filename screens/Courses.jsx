import React from "react";
import styled from "styled-components";
import { Button } from "react-native";

const Courses = ({ navigation }) => {
  return (
    <Container>
      <Text>Courses Screen</Text>
      <Button title="Close" onPress={() => navigation.goBack()}></Button>
    </Container>
  );
};

export default Courses;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;
