import { IPasta } from "./interface/pasta";

export class Pasta implements IPasta {
    public price: number;

    constructor() {
        this.price = 0;
    }

    public getPrice() {
        return this.price;
    }
}
