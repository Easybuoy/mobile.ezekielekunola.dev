import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { PanResponder, Animated } from "react-native";

import Project from "../components/Projects";

const Projects = ({ navigation }) => {
  const [pan, setPan] = useState(new Animated.ValueXY());
  const [panResponderHandler, setPanResponderHandler] = useState({});
  const [scale, setScale] = useState(new Animated.Value(0.9));
  const [translateY, setTranslateY] = useState(new Animated.Value(44));

  useEffect(() => {
    const panResponderHandler = PanResponder.create({
      onPanResponderGrant: () => {
        Animated.spring(scale, {
          toValue: 1,
          useNativeDriver: false,
        }).start();
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: false,
        }).start();
      },
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: pan.x,
            dy: pan.y,
          },
        ],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: () => {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();

        Animated.spring(scale, {
          toValue: 0.9,
          useNativeDriver: false,
        }).start();

        Animated.spring(translateY, {
          toValue: 44,
          useNativeDriver: false,
        }).start();
      },
    });

    setPanResponderHandler(panResponderHandler);
  }, []);

  return (
    <Container>
      <Animated.View
        style={{
          transform: [
            {
              translateX: pan.x,
            },
            { translateY: pan.y },
          ],
        }}
        {...panResponderHandler.panHandlers}
      >
        <Project
          title="Price Tag"
          image={require("../assets/background5.jpg")}
          author="Ezekiel"
          text="Thanks to akjdbadka dakjdasdk aj dajhda d ajs dasjd ajds"
        />
      </Animated.View>

      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          transform: [
            {
              scale: scale,
            },
            {
              translateY: translateY,
            },
          ],
        }}
      >
        <Project />
      </Animated.View>
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
