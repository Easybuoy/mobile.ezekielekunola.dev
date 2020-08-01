import React from "react";
import styled from "styled-components";

import { NotificationIcon } from "./Icons";
import Colors from "../constants/Colors";

const NotificationButton = () => {
  return (
    <Container>
      <NotificationIcon />
      <Bubble>
        <Text>3</Text>
      </Bubble>
    </Container>
  );
};

export default NotificationButton;

const Container = styled.View`
  width: 44px;
  height: 44px;
  justify-content: center;
  align-items: center;
`;

const Bubble = styled.View`
  width: 16px;
  height: 16px;
  background: ${Colors.GREY};
  position: absolute;
  top: 0;
  right: 5px;
  border-radius: 8px;
`;

const Text = styled.Text`
  color: ${Colors.SECONDARY};
  font-size: 12px;
  font-weight: 700;
  text-align: center;
`;
