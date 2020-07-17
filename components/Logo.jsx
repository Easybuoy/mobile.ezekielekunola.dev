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

const Container = stlyed.View``;

const Image = stlyed.Image`
    width: 36px;
    height: 36px;
`;

const Text = stlyed.Text`

`;
