import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LottieView from "lottie-react-native";
import { Animated, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;

const Loading = ({ isActive }) => {
  const [animation, setAnimation] = useState();
  const [top] = useState(new Animated.Value(0));
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    if (isActive) {
      Animated.timing(top, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }).start();

      Animated.timing(opacity, {
        toValue: 1,
        duration: 0,
        useNativeDriver: false,
      }).start();
      if (animation) {
        animation.play();
      }
    } else {
      Animated.timing(top, {
        toValue: screenHeight,
        duration: 0,
        useNativeDriver: false,
      }).start();

      Animated.timing(opacity, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }).start();

      if (animation) {
        animation.loop = false;
      }
    }
  }, [animation, isActive]);

  return (
    <AnimatedContainer style={{ top, opacity }}>
      <LottieView
        source={require("../../assets/lottie-loading-fluid.json")}
        autoPlay={false}
        loop={true}
        
        ref={(animation) => {
          setAnimation(animation);
        }}
      />
    </AnimatedContainer>
  );
};

export default Loading;

const Container = styled.View`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);
