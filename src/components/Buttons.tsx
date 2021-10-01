import React, { FC, useContext, useState } from "react";
import styled from "styled-components";
import { ButtonsContext } from "../context/ButtonsContext";

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
`;

const Button = styled.button`
  width: 70px;
  padding: 5px;
  margin: 10px;
  background-color: transparent;
  color: black;
  border-top: none;
  border-bottom: none;
  border-left: 1px #000 solid;
  border-right: 1px #000 solid;
  cursor: pointer;
`;

const Buttons: FC = () => {
  const { setFirstClass, setSecondClass, setThirdClass } =
    useContext(ButtonsContext);
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  const numberHide = "number-hide";
  const numberAnimationDisplay = "number-animation-display";
  const numberAnimationShow = "number-animation-show";

  const showAllNumbers = () => {
    setTimer(
      setTimeout(() => {
        setFirstClass(numberAnimationDisplay);
        setSecondClass(numberAnimationDisplay);
        setThirdClass(numberAnimationDisplay);
      }, 4000)
    );
  };

  const onLeft = () => {
    setThirdClass(numberAnimationShow);
    setSecondClass(`${numberAnimationShow}-1`);
    setFirstClass(`${numberAnimationShow}-2`);
    showAllNumbers();
  };

  const onRight = () => {
    setFirstClass(numberAnimationShow);
    setSecondClass(`${numberAnimationShow}-1`);
    setThirdClass(`${numberAnimationShow}-2`);
    showAllNumbers();
  };

  const reset = () => {
    if (timer) clearTimeout(timer);
    setFirstClass(numberHide);
    setSecondClass(numberHide);
    setThirdClass(numberHide);
  };

  return (
    <ButtonsContainer data-testid="buttons">
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Button onClick={onLeft}>w lewo</Button>
        <Button onClick={onRight}>w prawo</Button>
      </div>
      <div>
        <Button onClick={reset}>reset</Button>
      </div>
    </ButtonsContainer>
  );
};

export default Buttons;
