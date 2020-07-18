import React from "react";
import stlyed from "styled-components";

const Logo = ({ image, text }) => {
  return (
    <Container>
      <Image source={image} />
      <Text>{text}</Text>
    </Container>
  );
};

export default Logo;

const Container = stlyed.View`
  flex-direction: row;
  background: white;
  height: 60px;
  padding: 12px 16px 12px;
  box-shadow: 0 5px 10px rgba(0,0,0, 0.05);
  align-items: center;
  margin: 0 8px;
  border-radius: 10px;

`;

const Image = stlyed.Image`
width: 36px;
height: 36px;
`;

const Text = stlyed.Text`
  font-weight: 600;
  font-size: 17px;
  margin-left: 8px;
`;
