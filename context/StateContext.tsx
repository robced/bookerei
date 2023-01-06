import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  AppContext,
  AppContextProps,
} from "../interfaces/AppContext.interface";

const Context = createContext({} as AppContext);

export const StateContext = ({ children }: AppContextProps) => {
  const [loading, setLoading] = useState(true);
  const [servicesData, setServicesData] = useState<any>([]);
  const [productsData, setProductsData] = useState<any>([]);
  const [searching, setSearching] = useState(false);
  const [searchPrompt, setSearchPrompt] = useState("");
  const [searchResults, setSearchResults] = useState<any>([]);
  const [filtering, setFiltering] = useState(false);
  const [filteringBy, setFilteringBy] = useState("all");
  const [filteringPrompt, setFilteringPrompt] = useState("");
  const [filteringResults, setFilteringResults] = useState<any>([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    if (servicesData.length > 2 && productsData.length > 2) setLoading(false);
  }, [servicesData, productsData]);

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
        filteringPrompt,
        setFilteringPrompt,
        filteringResults,
        setFilteringResults,
        filteringBy,
        setFilteringBy,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
