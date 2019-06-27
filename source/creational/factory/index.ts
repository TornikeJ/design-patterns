import { Bmw } from "./Bmw";
import { Model } from "./interfaces";

export class BmwFactory {
    public static create(type: Model) {
        if (type === "X5") {
            return new Bmw(type, 108000, 300);
        } else if (type === "X6") {
            return new Bmw(type, 111000, 320);
        }
    }
}

export default BmwFactory;
