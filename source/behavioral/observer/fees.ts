import { IEvent } from "./interface/event";
import { Product } from ".";

export class Fees implements IEvent {
  public update(product: Product) {
    product.price = product.price * 1.2;
  }
}
