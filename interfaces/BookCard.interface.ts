import { Product } from "./Product.interface";

export interface BookCard {
  products: Product;
  main?: boolean;
  shop?: boolean;
  color: String;
  text: String;
}
