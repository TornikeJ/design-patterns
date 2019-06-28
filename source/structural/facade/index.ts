import { Discount } from "./discount";
import { Fees } from "./fees";
import { ICalc } from "./interface/calculation";
import { Shipping } from "./shipping";

class ShopFacade implements ICalc {
    public discount: Discount;
    public shipping: Shipping;
    public fees: Fees;

    constructor() {
        this.discount = new Discount();
        this.shipping = new Shipping();
        this.fees = new Fees();
    }

    public calc(price: number) {
        price = this.discount.calc(price);
        price = this.fees.calc(price);
        price += this.shipping.calc();
        return price;
    }
}

export default ShopFacade;
