import { IInk } from "./interface";

export class Ink implements IInk {
    public type: string;

    constructor(type: string) {
        this.type = type;
    }
    public get() {
        return this.type;
    }
}
