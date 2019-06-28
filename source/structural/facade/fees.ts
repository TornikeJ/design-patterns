import { ICalc } from "./interface/calculation";

export class Fees implements ICalc {
    public calc(value: number) {
        return value * 1.05;
    }
}
