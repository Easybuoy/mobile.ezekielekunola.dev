import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  ScrollView,
  SafeAreaView,
  Animated,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

import { closeNotif } from "../store/actions/action";
import { notificationsData } from "../data";
import Colors from "../constants/Colors";

const screenWidth = Dimensions.get("window").width;

let cardWidth = `${screenWidth - 40}px `;
if (screenWidth > 500) {
  cardWidth = `${460}px`;
}

const Notifications = () => {
  const [translateY] = useState(new Animated.Value(30));
  const [opacity] = useState(new Animated.Value(0));
  const [top] = useState(new Animated.Value(3000));
  const dispatch = useDispatch();
  const action = useSelector((state) => state.action.action);

  useEffect(() => {
    toggleNotification();
  }, [action, toggleNotification]);

  const toggleNotification = () => {
    if (action === "openNotif") {
      Animated.parallel([
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: false,
        }).start(),

        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }).start(),

        Animated.timing(top, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        }).start(),
      ]);
    }

    if (action === "closeNotif") {
      Animated.parallel([
        Animated.spring(translateY, {
          toValue: 30,
          useNativeDriver: false,
        }).start(),

        Animated.timing(opacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }).start(),

        Animated.timing(top, {
          toValue: 3000,
          duration: 0,
          useNativeDriver: false,
        }).start(),
      ]);
    }
  };

  return (
    <AnimatedContainer style={{ top }}>
      <TouchableOpacity
        onPress={() => dispatch(closeNotif())}
        style={{
          position: "absolute",
          top: 40,
          left: "50%",
          marginLeft: -22,
          zIndex: 100,
        }}
      >
        <CloseButton style={{ elevation: 20 }}>
          <Ionicons name="ios-close" size={44} color={Colors.PRIMARY} />
        </CloseButton>
      </TouchableOpacity>

      <SafeAreaView>
        <ScrollView style={{ padding: 20 }}>
          <Wrapper>
            <Subtitle>New</Subtitle>
            {notificationsData.map((notification) => (
              <AnimatedItem
                key={notification.date}
                style={{
                  opacity,
                  transform: [{ translateY }],
                }}
              >
                <Header>
                  <Logo source={notification.logo} resizeMode="contain" />
                  <Title>{notification.title}</Title>
                  <DateContainer>
                    <Date>{notification.date}</Date>
                  </DateContainer>
                </Header>
                <Text>{notification.text}</Text>
              </AnimatedItem>
            ))}
          </Wrapper>
        </ScrollView>
      </SafeAreaView>
    </AnimatedContainer>
  );
};

export default Notifications;

const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: #f0f3f5;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const CloseButton = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const Wrapper = styled.View`
  align-self: center;
  width: ${cardWidth};
  padding-top: 50px;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 600;
  color: #b8bece;
`;

const Item = styled.View`
  width: 100%;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 50px 10px rgba(0, 0, 0, 0.09);
  margin-top: 20px;
`;

const AnimatedItem = Animated.createAnimatedComponent(Item);

const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Logo = styled.Image`
  width: 24px;
  height: 24px;
`;

const DateContainer = styled.View`
  background: ${Colors.GREY};
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  padding: 0 8px;
  height: 20px;
  position: absolute;
  top: 0;
  right: 0;
`;

const Date = styled.Text`
  color: ${Colors.WHITE};
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
`;

const Title = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
  margin-left: 8px;
`;

const Text = styled.Text`
  font-size: 17px;
  color: #3c4560;
  margin-top: 20px;
  line-height: 24px;
`;
