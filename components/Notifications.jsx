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

const screenWidth = Dimensions.get("window").width;

let cardWidth = screenWidth - 40;
if (screenWidth > 500) {
  cardWidth = 460;
}

const Notifications = () => {
  const [translateY] = useState(new Animated.Value(30));
  const [opacity] = useState(new Animated.Value(0));
  const [top] = useState(new Animated.Value(3000));
  const dispatch = useDispatch();
  const action = useSelector((state) => state.action.action);

  useEffect(() => {
    toggleNotification();
  }, []);

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
    <AnimatedContainer>
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
          <Ionicons name="ios-close" size={44} color="#546bfb" />
        </CloseButton>
      </TouchableOpacity>

      <SafeAreaView>
        <ScrollView style={{ padding: 20 }}>
            
        </ScrollView>
      </SafeAreaView>
    </AnimatedContainer>
  );
};

export default Notifications;
