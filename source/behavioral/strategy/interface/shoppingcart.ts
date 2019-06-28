interface IShoppingCart {
    checkout(): number;
    setAmount(amount: number): void;
}

type DiscountType = (amount: number) => number;

export {
    IShoppingCart,
    DiscountType,
};
