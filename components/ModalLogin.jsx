import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { BlurView } from "expo-blur";
import Success from "./ui/Success";

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

  const loginHandler = () => {};

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
  };

  return (
    <Container>
      <TouchableWithoutFeedback onPress={tapBackground}>
        <BlurView
          tint="default"
          intensity={100}
          style={{ position: "absolute", width: "100%", height: "100%" }}
        />
      </TouchableWithoutFeedback>
      <Modal>
        <Logo source={require("../assets/logo-dc.png")} />
        <Text>Start Learning</Text>

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
      </Modal>

      <Success isActive={isSuccessful} />
    </Container>
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

const Modal = styled.View`
  width: 335px;
  height: 370px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  align-items: center;
`;

const Logo = styled.Image`
  width: 44px;
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
  background: #5263ff;
  width: 295px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 10px 20px #c2cbff;
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
