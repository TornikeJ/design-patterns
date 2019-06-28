import { Pasta } from "./pasta";
import { PastaDecorator } from "./pastaDecorator";

export class CheeseDecorator extends PastaDecorator {
    constructor(pasta: Pasta) {
        super(pasta);
    }

    public getPrice() {
        return super.getPrice() + 3;
    }
}
