import React from "react";
import styled from "styled-components";

const Course = ({ image, logo, subtitle, avatar, caption, name }) => {
  return (
    <Container>
      <Cover>
        <Image source={image} />
        <Logo source={logo} />
        <Subtitle>{subtitle}</Subtitle>
      </Cover>

      <Content>
        <Avatar source={avatar} />
        <Caption>{caption}</Caption>
        <Name>{name}</Name>
      </Content>
    </Container>
  );
};

export default Course;

const Container = styled.View`

`

const Cover = styled.View``

const Image = styled.Image``

const Logo = styled.Image``

const Title = styled.Text``

const Subtitle = styled.Text``

const Avatar = styled.Image``

const Caption = styled.Text``

const Name = styled.Name