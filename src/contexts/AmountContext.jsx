import { createContext, useState } from "react";

const AmountContext = createContext();

export const AmountProvider = ({ children }) => {
  const [amount, setAmount] = useState(() => {
    const storedAmount = localStorage?.getItem("amountToPay");
    try {
      return storedAmount ? storedAmount : "";
    } catch (error) {
      // console.error("Failed to parse userData:", error);
      return "";
    }
  });

  return (
    <AmountContext.Provider value={{ amount, setAmount }}>
      {children}
    </AmountContext.Provider>
  );
};

export default AmountContext;
