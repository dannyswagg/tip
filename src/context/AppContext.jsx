import { createContext, useState } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const [perPersonTip, setPerPersonTip] = useState("");
  const [amount, setAmount] = useState("");
  return (
    <AppContext.Provider
      value={{ perPersonTip, setPerPersonTip, amount, setAmount }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
