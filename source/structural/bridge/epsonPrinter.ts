import { Ink } from "./ink";
import { IPrinter } from "./interface";
import { Printer } from "./printer";

export class EpsonPrinter extends Printer implements IPrinter {
    public ink: Ink;

    constructor(ink: Ink) {
        super(ink);
    }

    public print() {
        return "Printer: Epson, Ink: " + this.ink.get();
    }
}
