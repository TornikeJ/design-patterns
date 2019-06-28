import { DiscountType, IShoppingCart } from "./interface/shoppingcart";

class ShoppingCart implements IShoppingCart {
    public amount: number;
    public discount: DiscountType;

    constructor(discount: DiscountType) {
        this.discount = discount;
        this.amount = 0;
    }

    public checkout() {
        return this.discount(this.amount);
    }

    public setAmount(amount: number) {
        this.amount = amount;
    }
}

function guestStrategy(amount: number) {
    return amount;
}

function regularStrategy(amount: number) {
    return amount * 0.9;
}

function premiumStrategy(amount: number) {
    return amount * 0.8;
}

export {
    ShoppingCart,
    guestStrategy,
    regularStrategy,
    premiumStrategy,
};
