import { Key } from "react";

export interface Product {
  _id: Key | null;
  name: String;
  author: String;
  slug: String;
  image: any;
  product: String;
  price: String;
  genre: String;
  quote: String;
  details: String;
}
