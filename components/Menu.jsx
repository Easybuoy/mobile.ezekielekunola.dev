import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Animated, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { menuData } from "../data";
import MenuItem from "./MenuItem";

const screenHeight = Dimensions.get("window").height;

const Menu = () => {
  const [top, setTop] = useState(new Animated.Value(screenHeight));

  useEffect(() => {
    Animated.spring(top, {
      toValue: 0,
      useNativeDriver: false,
    }).start();
  }, []);

  const toggleMenu = () => {
    Animated.spring(top, {
      toValue: screenHeight,
      useNativeDriver: false,
    }).start();
  };

  return (
    <AnimatedContainer style={{ top }}>
      <Cover>
        <Image source={require("../assets/background2.jpg")} />
        <Title>Ezekiel Ekunola</Title>
        <Subtitle>Developer at EasyTech</Subtitle>
      </Cover>
      <TouchableOpacity
        onPress={toggleMenu}
        style={{
          position: "absolute",
          top: 120,
          left: "50%",
          marginLeft: -22,
          zIndex: 1,
        }}
      >
        <CloseView>
          <Ionicons name="ios-close" size={44} color="#546bfb" />
        </CloseView>
      </TouchableOpacity>
      <Content>
        {menuData.map((menu) => (
          <MenuItem
            key={menu.title}
            icon={menu.icon}
            title={menu.title}
            text={menu.text}
          />
        ))}
      </Content>
    </AnimatedContainer>
  );
};

export default Menu;

const Container = styled.View`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 142px;
  background: black;
  justify-content: center;
  align-items: center;
`;

const Content = styled.View`
  height: ${`${screenHeight}px`};
  background: #f0f3f5;
  padding: 50px;
`;

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
`;

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8px;
`;
