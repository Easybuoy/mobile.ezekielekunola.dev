import React from "react";
import styled from "styled-components";
import { Button, SafeAreaView } from "react-native";

const Section = ({ route }) => {
  const { section } = route.params;
  console.log(section);
  return (
    <SafeAreaView>
      <Container>
        <Cover>
          <Image source={section.image} />
          <Title>{section.title}</Title>
          <Caption>{section.caption}</Caption>
        </Cover>
      </Container>
    </SafeAreaView>
  );
};

export default Section;

const Container = styled.View`
  flex: 1;
`;

const Cover = styled.View`
  height: 375px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
  width: 170px;
  position: absolute;
  top: 78px;
  left: 20px;
`;

const Caption = styled.Text`
  color: white;
  font-size: 17px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 300px;
`;

const Text = styled.Text``;
