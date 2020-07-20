import React from "react";
import styled from "styled-components";
import { Button } from "react-native";

const Projects = ({ navigation }) => {
  return (
    <Container>
      <Text>Projects Screen</Text>
      <Button title="Close" onPress={() => navigation.goBack()}></Button>
    </Container>
  );
};

export default Projects;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;
