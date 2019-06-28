import { IEvent } from "./interface/event";
import { Product } from ".";

export class Proft implements IEvent {

    public update(product: Product) {
        product.price = product.price * 2;
    }
}
