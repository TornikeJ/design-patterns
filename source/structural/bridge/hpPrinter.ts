import { Ink } from "./ink";
import { IPrinter } from "./interface";
import { Printer } from "./printer";

export class HPprinter extends Printer implements IPrinter {
    public ink: Ink;

    constructor(ink: Ink) {
        super(ink);
    }

    public print() {
        return "Printer: HP, Ink: " + this.ink.get();
    }
}
