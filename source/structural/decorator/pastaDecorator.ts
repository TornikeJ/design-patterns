import { Pasta } from "./pasta";

export class PastaDecorator extends Pasta {
    constructor(protected pasta: Pasta) {
        super();
        this.pasta = pasta;
    }

    public getPrice() {
        return this.pasta.getPrice();
    }
}
