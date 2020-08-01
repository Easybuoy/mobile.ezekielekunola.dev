import React, { useEffect } from "react";
import styled from "styled-components";
import { TouchableOpacity, StatusBar, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { WebView } from "react-native-webview";
import Markdown from "react-native-showdown";
const Section = ({ route, navigation }) => {
  const { section } = route.params;

  useEffect(() => {
    StatusBar.setBarStyle("light-content", true);

    return () => {
      StatusBar.setBarStyle("dark-content", true);
    };
  });

  return (
    <ScrollView>
      <Container>
        <StatusBar hidden />
        <Cover>
          <Image source={section.image} />
          <Wrapper>
            <Logo source={section.logo} />
            <Subtitle>{section.subtitle}</Subtitle>
          </Wrapper>
          <Title>{section.title}</Title>
          <Caption>{section.caption}</Caption>
        </Cover>
        <TouchableOpacity
          style={{ position: "absolute", top: 30, right: 20 }}
          onPress={() => navigation.goBack()}
        >
          <CloseView>
            <Ionicons
              name="ios-close"
              size={36}
              color="#4475f2"
              style={{ marginTop: -2 }}
            />
          </CloseView>
        </TouchableOpacity>

        <Content>
          {/* <WebView
          source={{ html: htmlContent + htmlStyles }}
          scalesPageToFit={false}
          scrollEnabled={false}
        /> */}

          <Markdown
            body={section.content}
            pureCSS={htmlStyles}
            scalesPageToFit={false}
            scrollEnabled={false}
          />
        </Content>
      </Container>
    </ScrollView>
  );
};

export default Section;

const htmlContent = `
<h2>Title </h2>
<p>A <strong>link</strong></p>
`;

const htmlStyles = `
 * {
   padding: 0;
   margin: 5px;
   font-family: -apple-system, Roboto;
   font-size: 17px;
   font-weight: normal;
   color: #3c45c0;
   line-height: 24px;
   overflow-y: scroll;
 }

 pre {
   padding: 20px;
   margin: 10px;
   background: #212C4F;
   overflow:hidden;
   word-wrap: break-word;
   border-radius: 10px;
   margin-top: 20px;
   overflow-x: scroll;
 }

 code {
   color: white;
 }
`;

const Container = styled.View`
  flex: 1;
`;

const Cover = styled.View`
  height: 375px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
  width: 300px;
  position: absolute;
  top: 78px;
  left: 20px;
`;

const Caption = styled.Text`
  color: white;
  font-size: 17px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 300px;
`;

const CloseView = styled.View`
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 16px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.View`
  flex-direction: row;
  position: absolute;
  top: 40px;
  left: 20px;
  align-items: center;
`;

const Logo = styled.Image`
  width: 24px;
  height: 24px;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  margin-left: 5px;
  text-transform: uppercase;
`;

const Content = styled.View`
  height: 1000px;
  padding: 20px;
`;
