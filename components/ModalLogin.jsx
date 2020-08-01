import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Animated,
  Dimensions,
  AsyncStorage,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { BlurView } from "expo-blur";

import Success from "./ui/Success";
import Loading from "./ui/Loading";
import { closeLogin, updateName } from "../store/actions/action";
import firebase from "../config/Firebase";
import Colors from "../constants/Colors";

const screenHeight = Dimensions.get("window").height;

const ModalLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [iconEmail, setIconEmail] = useState(
    require("../assets/icon-email.png")
  );
  const [iconPasswrod, setIconPasswrod] = useState(
    require("../assets/icon-password.png")
  );
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [top] = useState(new Animated.Value(screenHeight));
  const [scale] = useState(new Animated.Value(1.3));
  const [translateY] = useState(new Animated.Value(0));
  const dispatch = useDispatch();
  const action = useSelector((state) => state.action.action);

  useEffect(() => {
    retreiveName();
    if (action === "openLogin") {
      Animated.timing(top, {
        toValue: 0,
        useNativeDriver: false,
        duration: 0,
      }).start();

      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: false,
      }).start();
      Animated.timing(translateY, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
    }

    if (action === "closeLogin") {
      setTimeout(() => {
        Animated.timing(top, {
          toValue: screenHeight,
          useNativeDriver: false,
          duration: 0,
        }).start();

        Animated.spring(scale, {
          toValue: 1.3,
          useNativeDriver: false,
        }).start();
      }, 500);

      Animated.timing(translateY, {
        toValue: 1000,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  }, [action]);

  const loginHandler = () => {
    setIsLoading(true);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        Alert.alert("Error", error.message);
      })
      .then((res) => {
        setIsLoading(false);
        if (res) {
          setIsSuccessful(true);

          storeName("Ezekiel");
          dispatch(updateName("Ezekiel", require("../assets/avatar.jpg")));

          setTimeout(() => {
            dispatch(closeLogin());
            setIsSuccessful(false);
          }, 1000);
        }
      });
  };

  const storeName = async (name) => {
    try {
      await AsyncStorage.setItem("name", name);
    } catch (error) {}
  };

  const retreiveName = async () => {
    try {
      const name = await AsyncStorage.getItem("name");
      if (name !== null) {
        dispatch(updateName(name, require("../assets/avatar.jpg")));
      }
    } catch (error) {}
  };

  const focusEmail = () => {
    setIconEmail(require("../assets/icon-email-animated.gif"));
    setIconPasswrod(require("../assets/icon-password.png"));
  };

  const focusPassword = () => {
    setIconEmail(require("../assets/icon-email.png"));
    setIconPasswrod(require("../assets/icon-password-animated.gif"));
  };

  const tapBackground = () => {
    Keyboard.dismiss();
    dispatch(closeLogin());
  };

  return (
    <AnimatedContainer style={{ top }}>
      <TouchableWithoutFeedback onPress={tapBackground}>
        <BlurView
          tint="default"
          intensity={100}
          style={{ position: "absolute", width: "100%", height: "100%" }}
        />
      </TouchableWithoutFeedback>
      <AnimatedModal style={{ transform: [{ scale }, { translateY }] }}>
        <Logo source={require("../assets/icon.png")} />
        <Text>Welcome Back</Text>

        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          onFocus={focusEmail}
        />

        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          onFocus={focusPassword}
        />
        <IconEmail source={iconEmail} />
        <IconPassword source={iconPasswrod} />

        <TouchableOpacity onPress={loginHandler}>
          <Button>
            <ButtonText>Login</ButtonText>
          </Button>
        </TouchableOpacity>
      </AnimatedModal>

      <Success isActive={isSuccessful} />
      <Loading isActive={isLoading} />
    </AnimatedContainer>
  );
};

export default ModalLogin;

const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  justify-content: center;
  align-items: center;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Modal = styled.View`
  width: 335px;
  height: 370px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  align-items: center;
`;

const AnimatedModal = Animated.createAnimatedComponent(Modal);

const Logo = styled.Image`
  width: 120px;
  height: 44px;
  margin-top: 50px;
`;

const Text = styled.Text`
  margin-top: 20px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  width: 160px;
  text-align: center;
  color: #b8bece;
`;

const TextInput = styled.TextInput`
  border: 1px solid #dbdfea;
  width: 295px;
  height: 44px;
  border-radius: 10px;
  font-size: 17px;
  color: #3c4560;
  margin-top: 20px;
  padding-left: 44px;
`;

const Button = styled.View`
  background: ${Colors.PRIMARY};
  width: 295px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 10px 20px ${Colors.PRIMARY};
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
`;

const IconEmail = styled.Image`
  width: 24px;
  height: 16px;
  position: absolute;
  top: 165px;
  left: 31px;
`;

const IconPassword = styled.Image`
  width: 18px;
  height: 24px;
  position: absolute;
  top: 225px;
  left: 35px;
`;
