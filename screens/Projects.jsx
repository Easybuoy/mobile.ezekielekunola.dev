import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { PanResponder, Animated } from "react-native";

import Project from "../components/Projects";
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

  useEffect(() => {
    const panResponderHandler = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
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

        if (positionY > 200) {
          Animated.timing(pan, {
            toValue: { x: 0, y: 1000 },
            useNativeDriver: false,
            duration: 1000,
          }).start(() => {
            pan.setValue({ x: 0, y: 0 });
            scale.setValue(0.9);
            translateY.setValue(44);
            thirdScale.setValue(0.8);
            thirdTranslateY.setValue(-50);
            setIndex(getNextIndex(index));
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
          title={projectsData[index].title}
          image={projectsData[index].image}
          author={projectsData[index].author}
          text={projectsData[index].text}
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
          text={projectsData[getNextIndex(index)].title}
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
          text={projectsData[getNextIndex(index + 1)].title}
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
