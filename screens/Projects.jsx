import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { PanResponder, Animated } from "react-native";
import { useSelector } from "react-redux";

import Project from "../components/Project";
import { projectsData } from "../data";

const getNextIndex = (index) => {
  const nextIndex = index + 1;
  if (nextIndex > projectsData.length - 1) {
    return 0;
  }
  return nextIndex;
};

const Projects = ({ navigation }) => {
  const [pan, setPan] = useState(new Animated.ValueXY());
  const [panResponderHandler, setPanResponderHandler] = useState({});
  const [scale, setScale] = useState(new Animated.Value(0.9));
  const [translateY, setTranslateY] = useState(new Animated.Value(44));
  const [thirdScale, setThirdScale] = useState(new Animated.Value(0.8));
  const [thirdTranslateY, setThirdTranslateY] = useState(
    new Animated.Value(-50)
  );
  const [index, setIndex] = useState(0);
  const [opacity, setOpacity] = useState(new Animated.Value(0));
  const action = useSelector((state) => state.action.action);

  useEffect(() => {
    const panResponderHandler = PanResponder.create({
      onMoveShouldSetPanResponder: (event, gestureState) => {
        if (gestureState.dx === 0 && gestureState.dy === 0) {
          return false;
        } else {
          if (action === "openCard") {
            return false;
          }
          return true;
        }
      },
      onPanResponderGrant: () => {
        Animated.spring(scale, {
          toValue: 1,
          useNativeDriver: false,
        }).start();
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: false,
        }).start();

        Animated.spring(thirdScale, {
          toValue: 0.9,
          useNativeDriver: false,
        }).start();

        Animated.spring(thirdTranslateY, {
          toValue: 44,
          useNativeDriver: false,
        }).start();

        Animated.timing(opacity, {
          toValue: 1,
          useNativeDriver: false,
        }).start();
      },

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
        const positionY = pan.y.__getValue();

        Animated.timing(opacity, {
          toValue: 0,
          useNativeDriver: false,
        }).start();

        if (positionY > 200) {
          Animated.timing(pan, {
            toValue: { x: 0, y: 1000 },
            useNativeDriver: false,
          }).start(() => {
            pan.setValue({ x: 0, y: 0 });
            scale.setValue(0.9);
            translateY.setValue(44);
            thirdScale.setValue(0.8);
            thirdTranslateY.setValue(-50);
            const nextIndex = getNextIndex(index);
            setIndex(nextIndex);
          });
        } else {
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

          Animated.spring(thirdScale, {
            toValue: 0.8,
            useNativeDriver: false,
          }).start();

          Animated.spring(thirdTranslateY, {
            toValue: -50,
            useNativeDriver: false,
          }).start();
        }
      },
    });

    setPanResponderHandler(panResponderHandler);
  }, [index, action]);

  return (
    <Container>
      <AnimatedMask style={{ opacity }} />

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
          title={projectsData[index].title}
          image={projectsData[index].image}
          author={projectsData[index].author}
          text={projectsData[index].text}
          canOpen={true}
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
        <Project
          title={projectsData[getNextIndex(index)].title}
          image={projectsData[getNextIndex(index)].image}
          text={projectsData[getNextIndex(index)].text}
          author={projectsData[getNextIndex(index)].author}
        />
      </Animated.View>

      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -3,
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          transform: [
            {
              scale: thirdScale,
            },
            {
              translateY: thirdTranslateY,
            },
          ],
        }}
      >
        <Project
          title={projectsData[getNextIndex(index + 1)].title}
          image={projectsData[getNextIndex(index + 1)].image}
          text={projectsData[getNextIndex(index + 1)].text}
          author={projectsData[getNextIndex(index + 1)].author}
        />
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

const Mask = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  z-index: -3;
`;

const AnimatedMask = Animated.createAnimatedComponent(Mask);
