import React, { useState } from "react";
import styled from "styled-components";
import { Animated } from "react-native";

const Projects = ({ title, image, author, text }) => {
  const [cardWidth] = useState(new Animated.Value(315));
  const [cardHeight] = useState(new Animated.Value(460));

  const openCard = () => {

  }
  
  return (
    <AnimatedContainer style={{ width: cardWidth, height: cardHeight }}>
      <Cover>
        <Image source={image} />
        <Title>{title}</Title>
        <Author>by {author}</Author>
      </Cover>
      <Text>{text}</Text>
    </AnimatedContainer>
  );
};

export default Projects;

const Container = styled.View`
  width: 315px;
  height: 460px;
  border-radius: 14px;
  background-color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 290px;
  overflow: hidden;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
`;

const Image = styled.Image`
  width: 100%;
  height: 290px;
`;

const Title = styled.Text`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  width: 300px;
`;

const Author = styled.Text`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
`;

const Text = styled.Text`
  font-size: 17px;
  margin: 20px;
  line-height: 24px;
  color: #3c4560;
`;
