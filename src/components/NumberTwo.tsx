import React, { FC } from "react";
import { NumberProps } from "../types/NumberProps";

const NumberTwo: FC<NumberProps> = ({ classNumber }) => {
  return <div className={classNumber}>2</div>;
};

export default NumberTwo;
