import { Fees } from "./fees";
import { IEvent, productType } from "./interface/event";
import { IProduct } from "./interface/products";
import { Proft } from "./profit";

class Product implements IProduct {
  public price: number;
  public actions: IEvent[];

  constructor() {
    this.price = 0;
    this.actions = [];
  }

  public setBasePrice(val: number) {
    this.price = val;
    this.notifyAll();
  }

  public register(observer: IEvent) {
    this.actions.push(observer);
  }

  public unregister(observer: productType) {
    this.actions = this.actions.filter((el) => !(el instanceof observer));
  }

  public notifyAll() {
    return this.actions.forEach((el) => el.update(this));
  }
}

export { Product, Fees, Proft };
