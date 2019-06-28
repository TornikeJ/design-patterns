import { IInterpret } from "./interface";
import { Min } from "./min";
import { Sum } from "./sum";

class Num implements IInterpret {
    public val: number;

    constructor(val: number) {
        this.val = val;
    }

    public interpret() {
        return this.val;
    }
}

export { Num, Min, Sum };
