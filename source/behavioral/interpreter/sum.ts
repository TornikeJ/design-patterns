import { IInterpret } from "./interface";
import { Num } from ".";

export class Sum implements IInterpret {
    public left: Num;
    public right: Num;
    constructor(left: Num, right: Num) {
        this.left = left;
        this.right = right;
    }

    public interpret() {
        return this.left.interpret() + this.right.interpret();
    }
}
