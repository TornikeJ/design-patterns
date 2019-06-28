import { Pasta } from "./pasta";
import { PastaDecorator } from "./pastaDecorator";

export class SauceDecorator extends PastaDecorator {
    constructor(pasta: Pasta) {
        super(pasta);
    }

    public getPrice() {
        return super.getPrice() + 5;
    }
}
