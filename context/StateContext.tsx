import { createContext, PropsWithChildren, useContext, useState } from "react";
import {
  AppContext,
  AppContextProps,
} from "../interfaces/AppContext.interface";
import { client } from "../lib/client";

const Context = createContext({} as AppContext);

export const StateContext = ({ children }: AppContextProps) => {
  const [loading, setLoading] = useState(true);
  const [servicesData, setServicesData] = useState<any>([]);
  const [productsData, setProductsData] = useState<any>([]);
  const [searching, setSearching] = useState(false);
  const [searchPrompt, setSearchPrompt] = useState("");
  const [searchResults, setSearchResults] = useState<any>([]);
  const [filtering, setFiltering] = useState(false);
  const [showCart, setShowCart] = useState(false);

  if (servicesData.length > 2 && productsData.length > 2) {
    setLoading(false);
  }

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        loading,
        setLoading,
        servicesData,
        setServicesData,
        productsData,
        setProductsData,
        searching,
        setSearching,
        filtering,
        setFiltering,
        searchPrompt,
        setSearchPrompt,
        searchResults,
        setSearchResults,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
