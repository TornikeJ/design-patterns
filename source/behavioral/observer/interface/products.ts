import { IEvent } from "./event";

export interface IProduct {

    price: number;
    actions: IEvent[];

    // setBasePrice(val: number);
    // // register(observer: any);
    // // unregister(observer: any)
    // notifyAll();
}
