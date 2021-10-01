import React, { createContext, useState } from "react";

type ButtonsContextType = {
  firstClass: string;
  setFirstClass: React.Dispatch<React.SetStateAction<string>>;
  secondClass: string;
  setSecondClass: React.Dispatch<React.SetStateAction<string>>;
  thirdClass: string;
  setThirdClass: React.Dispatch<React.SetStateAction<string>>;
};

export const ButtonsContext = createContext<ButtonsContextType>(
  {} as ButtonsContextType
);

export const ButtonsContextProvider: React.FC = ({ children }) => {
  const hideClass = "number-hide";
  const [firstClass, setFirstClass] = useState<string>(hideClass);
  const [secondClass, setSecondClass] = useState<string>(hideClass);
  const [thirdClass, setThirdClass] = useState<string>(hideClass);

  return (
    <ButtonsContext.Provider
      value={{
        firstClass,
        setFirstClass,
        secondClass,
        setSecondClass,
        thirdClass,
        setThirdClass,
      }}
    >
      {children}
    </ButtonsContext.Provider>
  );
};
