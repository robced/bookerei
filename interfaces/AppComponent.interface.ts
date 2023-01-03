import { Product } from "./Product.interface";
import { Service } from "./Service.interface";

export interface AppComponent {
  products: Product[];
  services: Service[];
}
