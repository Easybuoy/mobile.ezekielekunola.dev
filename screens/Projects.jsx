import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { PanResponder, Animated } from "react-native";

import Project from "../components/Projects";

const Projects = ({ navigation }) => {
  const [pan, setPan] = useState(new Animated.Value());

  return (
    <Container>
      <Project />
    </Container>
  );
};

export default Projects;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #f0f3f5;
`;

const Text = styled.Text``;
