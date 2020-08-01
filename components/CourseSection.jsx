import React from "react";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

const CourseSection = ({ image, progress, title }) => {
  return (
    <Container>
      <Mask>
        <Image source={image} />
        <LinearGradient
          colors={["rgba(0,0,00)", "rgba(0,0,0,0.5)"]}
          style={{ position: "absolute", width: "100%", height: "100%" }}
        />

        <LinearGradient
          colors={["#3399ff", "#33e1ff"]}
          start={[0, 0]}
          end={[1, 0]}
          style={{
            position: "absolute",
            bottom: 0,
            height: 4,
            borderRadius: 2,
            width: progress * 100 + "% ",
          }}
        />

        <Border />
        <Text>{title}</Text>
      </Mask>
    </Container>
  );
};

export default CourseSection;

const Mask = styled.View`
  height: 100%;
  border-radius: 10px;
  background: #3c4560;
  overflow: hidden;
  justify-content: flex-end;
  margin-left: 20px;
`;

const Image = styled.Image`
    width: 100%
`;
