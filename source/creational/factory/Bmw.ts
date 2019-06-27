import { IBmw, Model } from "./interfaces";

export class Bmw implements IBmw {
    public model: Model;
    public price: number;
    public maxSpeed: number;

    constructor(model: Model, price: number, maxSpeed: number) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}
