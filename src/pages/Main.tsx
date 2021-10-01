import React, { FC, useContext } from "react";
import styled from "styled-components";
import Buttons from "../components/Buttons";
import NumberOne from "../components/NumberOne";
import NumberTwo from "../components/NumberTwo";
import NumberThree from "../components/NumberThree";
import { ButtonsContext } from "../context/ButtonsContext";

import "../styles/classes.scss";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const NumberContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 300px;
  margin-top: 20px;
`;

const Main: FC = () => {
  const { firstClass, secondClass, thirdClass } = useContext(ButtonsContext);

  return (
    <Container>
      <Buttons />
      <NumberContainer>
        <NumberOne classNumber={firstClass} />
        <NumberTwo classNumber={secondClass} />
        <NumberThree classNumber={thirdClass} />
      </NumberContainer>
    </Container>
  );
};

export default Main;
