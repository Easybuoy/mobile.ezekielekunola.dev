import React from "react";
import styled from "styled-components";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
        <TouchableOpacity style={{ position: "absolute", top: 20, right: 20 }}>
          <CloseView>
            <Ionicons
              name="ios-close"
              size={36}
              color="#4475f2"
              style={{ marginTop: -2 }}
            />
          </CloseView>
        </TouchableOpacity>
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

const CloseView = styled.View`
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 16px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
`;
