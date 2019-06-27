import { IBmw } from "./interfaces";

export class Bmw implements IBmw {
    public model: string;
    public price: number;
    public maxSpeed: number;

    constructor(model: string, price: number, maxSpeed: number) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}
