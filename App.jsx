import React from "react";
import styled from "styled-components";
import { ScrollView, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Card from "./components/Card";
import { NotificationIcon } from "./components/Icons";
import Logo from "./components/Logo";
import logoData from "./data/logos";

export default function App() {
  return (
    <Container>
      <SafeAreaView>
        <ScrollView>
          <TitleBar>
            <Avatar source={require("./assets/avatar.jpg")} />
            <Title>Welcome Back,</Title>
            <Name>Ezekiel</Name>

            <NotificationIcon
              style={{ position: "absolute", right: 20, top: 5 }}
            />
          </TitleBar>

          <ScrollView
            horizontal={true}
            style={{
              flexDirection: "row",
              padding: 20,
              paddingLeft: 12,
              paddingTop: 30,
            }}
          >
            {logoData.map((logo) => (
              <Logo key={logo.text} image={logo.image} text={logo.text} />
            ))}
          </ScrollView>
          <Subtitle>Continue Learning</Subtitle>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ paddingBottom: 30 }}
          >
            <Card
              title="Styled Components"
              image={require("./assets/background2.jpg")}
              caption="React Native"
              logo={require("./assets/logo-react.png")}
              subtitle="5 of 12 sections"
            />

            <Card
              title="Styled Components"
              image={require("./assets/background2.jpg")}
              caption="React Native"
              logo={require("./assets/logo-react.png")}
              subtitle="5 of 12 sections"
            />

            <Card
              title="Styled Components"
              image={require("./assets/background2.jpg")}
              caption="React Native"
              logo={require("./assets/logo-react.png")}
              subtitle="5 of 12 sections"
            />
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

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
  position: absolute;
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
