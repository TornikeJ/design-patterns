import { ICar } from "./interface";

export class Car implements ICar {
    public drive() {
        return "driving";
    }
}
