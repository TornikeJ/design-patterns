import { ICalc } from "./interface/calculation";

export class Discount implements ICalc {
    public calc(value: number) {
        return value * 0.9;
    }
}
