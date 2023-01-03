import { Dispatch, SetStateAction } from "react";

export interface AppContext {
  showCart: Boolean;
  setShowCart: any;
  loading: Boolean;
  setLoading: any;
}
