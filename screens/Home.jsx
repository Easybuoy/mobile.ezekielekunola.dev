import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { openMenu } from "../store/actions/action";
import Card from "../components/Card";
import { NotificationIcon } from "../components/Icons";
import Logo from "../components/Logo";
import { logoData, cardsData, coursesData } from "../data";
import Course from "../components/Course";
import Menu from "../components/Menu";

const Home = ({ navigation }) => {
  const [scale] = useState(new Animated.Value(1));
  const [opacity] = useState(new Animated.Value(1));
  const dispatch = useDispatch();
  const menuStateAction = useSelector((state) => state.action.action);

  const toggleMenu = () => {
    if (menuStateAction === "openMenu") {
      Animated.timing(scale, {
        toValue: 0.9,
        duration: 300,
        easing: Easing.in(),
        useNativeDriver: false,
      }).start();
      Animated.spring(opacity, {
        toValue: 0.5,
        useNativeDriver: false,
      }).start();

      StatusBar.setBarStyle("light-content", true);
    }

    if (menuStateAction === "closeMenu") {
      Animated.timing(scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in(),
        useNativeDriver: false,
      }).start();
      Animated.spring(opacity, {
        toValue: 1,
        useNativeDriver: false,
      }).start();

      StatusBar.setBarStyle("dark-content", true);
    }
  };

  useEffect(() => {
    toggleMenu();
    StatusBar.setBarStyle("dark-content", true);
  }, [menuStateAction]);

  const openMenuHandler = () => {
    dispatch(openMenu());
  };

  return (
    <RootView>
      <Menu />
      <AnimatedContainer style={{ transform: [{ scale }], opacity }}>
        <SafeAreaView>
          <ScrollView>
            <TitleBar>
              <TouchableOpacity
                onPress={openMenuHandler}
                style={{ position: "absolute", top: 0, left: 10 }}
              >
                <Avatar source={require("../assets/avatar.jpg")} />
              </TouchableOpacity>
              <Title>Welcome Back,</Title>
              <Name>Ezekiel</Name>

              <NotificationIcon
                style={{ position: "absolute", right: 20, top: 5 }}
              />
            </TitleBar>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingRight: 12,
                paddingLeft: 12,
                paddingTop: 30,
              }}
              style={{
                flexDirection: "row",
              }}
            >
              {logoData.map((logo) => (
                <Logo key={logo.text} image={logo.image} text={logo.text} />
              ))}
            </ScrollView>
            <Subtitle>Projects</Subtitle>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingRight: 20,
              }}
              style={{ paddingBottom: 30 }}
            >
              {cardsData.map((card) => (
                <TouchableOpacity
                  key={card.title}
                  onPress={() => navigation.push("Section")}
                >
                  <Card
                    title={card.title}
                    image={card.image}
                    caption={card.caption}
                    logo={card.logo}
                    subtitle={card.subtitle}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>

            <Subtitle>Articles</Subtitle>

            <ScrollView
              contentContainerStyle={{
                alignItems: "center",
              }}
            >
              {coursesData.map((course) => (
                <Course
                  key={course.title}
                  image={course.image}
                  title={course.title}
                  subtitle={course.subtitle}
                  logo={course.logo}
                  author={course.author}
                  avatar={course.avatar}
                  caption={course.caption}
                />
              ))}
            </ScrollView>
          </ScrollView>
        </SafeAreaView>
      </AnimatedContainer>
    </RootView>
  );
};

export default Home;

const RootView = styled.View`
  background: black;
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  margin-left: 20px;
  top: 0;
  left: 0;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;
