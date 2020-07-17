import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Animated, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Menu = () => {
  const [top, setTop] = useState(new Animated.Value(900));

  useEffect(() => {
    Animated.spring(top, {
      toValue: 0,
      useNativeDriver: false,
    }).start();
  }, []);

  const toggleMenu = () => {
    Animated.spring(top, {
      toValue: 900,
      useNativeDriver: false,
    }).start();
  };

  return (
    <AnimatedContainer style={{ top }}>
      <Cover></Cover>
      <TouchableOpacity onPress={toggleMenu}>
        <CloseView>
          <Ionicons name="ios-close" size={44} color="#546bfb" />
        </CloseView>
      </TouchableOpacity>
      <Content></Content>
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
`;

const Content = styled.View`
  height: 900px;
  background: #f0f3f5;
`;

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
`;
