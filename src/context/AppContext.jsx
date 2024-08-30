import { createContext, useState } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const [perPersonTip, setPerPersonTip] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const [users, setUsers] = useState("");

  const resetAmount = () => {
    setAmount("0.00");
    setPerPersonTip("0.00");
    setPrice("");
    setUsers("");
  };

  return (
    <AppContext.Provider
      value={{
        perPersonTip,
        setPerPersonTip,
        amount,
        setAmount,
        price,
        setPrice,
        users,
        setUsers,
        resetAmount,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
