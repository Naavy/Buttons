import React, { FC } from "react";
import { NumberProps } from "../types/NumberProps";

const NumberThree: FC<NumberProps> = ({ classNumber }) => {
  return <div className={classNumber}>3</div>;
};

export default NumberThree;
