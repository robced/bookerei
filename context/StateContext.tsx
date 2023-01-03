import { createContext, PropsWithChildren, useContext, useState } from "react";
import { AppContext } from "../interfaces/AppContext.interface";

const Context = createContext({} as AppContext);

export const StateContext = ({ children }: PropsWithChildren) => {
  const [loading, setLoading] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        loading,
        setLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
