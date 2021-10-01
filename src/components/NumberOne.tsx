import React, { FC } from "react";
import { NumberProps } from "../types/NumberProps";

const NumberOne: FC<NumberProps> = ({ classNumber }) => {
  return <div className={classNumber}>1</div>;
};

export default NumberOne;
