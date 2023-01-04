import { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { Product } from "./Product.interface";
import { Service } from "./Service.interface";

export interface AppContext {
  showCart: Boolean;
  setShowCart: Dispatch<SetStateAction<boolean>>;
  loading: Boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  servicesData: Service[];
  setServicesData: Dispatch<SetStateAction<Array<Service>>>;
  productsData: Product[];
  setProductsData: Dispatch<SetStateAction<Array<Product>>>;
  searching: Boolean;
  setSearching: Dispatch<SetStateAction<boolean>>;
  filtering: Boolean;
  setFiltering: Dispatch<SetStateAction<boolean>>;
  searchPrompt: string;
  setSearchPrompt: Dispatch<SetStateAction<string>>;
  searchResults: Product[];
  setSearchResults: Dispatch<SetStateAction<Array<Product>>>;
}

export interface AppContextProps extends PropsWithChildren {
  products: Product[];
  services: Service[];
}
