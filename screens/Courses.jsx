import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

import CourseSection from "../components/courses/CourseSection";
import ComponentCourses from "../components/courses/Courses";
import { sectionsData } from "../data";

const screenWidth = Dimensions.get("window").width;

const Courses = ({ navigation }) => {
  return (
    <ScrollView>
      <Container>
        <Hero>
          <Background source={require("../assets/background12.jpg")} />
          <LinearGradient
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.5)"]}
            style={{
              position: "absolute",
              width: screenWidth,
              height: 300,
            }}
          />
          <Caption>Skills</Caption>

          <Sections>
            <SectionScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {sectionsData.map((section, index) => (
                <CourseSection
                  key={index}
                  title={section.title}
                  image={section.image}
                  progress={section.progress}
                  skillImage={section.skillImage}
                />
              ))}
            </SectionScrollView>
          </Sections>
          <Author>
            <Avatar source={require("../assets/avatar.jpg")} />
            <Name>Ezekiel Ekunola</Name>
          </Author>
        </Hero>
        <Subtitle>Articles</Subtitle>
        <ComponentCourses />
      </Container>
    </ScrollView>
  );
};

export default Courses;

const Container = styled.View`
  background: #f0f3f5;
`;

const ScrollView = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

const Hero = styled.View`
  height: 300px;
  background: #3c4560;
`;

const Background = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  width: ${screenWidth}px;
  height: 300px;
`;

const Caption = styled.Text`
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  color: #b8bece;
  margin-left: 20px;
  margin-top: 50px;
`;

const Sections = styled.View`
  margin-top: 20px;
  flex-direction: row;
`;

const SectionScrollView = styled.ScrollView`
  padding: 10px 0;
`;

const Author = styled.View`
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
  margin-left: 20px;
`;

const Avatar = styled.Image`
  width: 22px;
  height: 22px;
  border-radius: 11px;
  background: white;
`;

const Name = styled.Text`
  margin-left: 8px;
  color: #b8bece;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 600;
  color: #b8bece;
  margin: 20px 0 0 20px;
`;
