import { createContext, useState } from "react";

const AmountContext = createContext();

export const AmountProvider = ({ children }) => {
  const [amount, setAmount] = useState("");

  return (
    <AmountContext.Provider value={{ amount, setAmount }}>
      {children}
    </AmountContext.Provider>
  );
};

export default AmountContext;
