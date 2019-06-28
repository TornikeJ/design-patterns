import { Product } from "..";

export type productType= (product: Product) => void;

export interface IEvent {
    update(product: Product): void;
}
