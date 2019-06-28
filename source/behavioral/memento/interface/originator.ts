import { Memento } from "../memento";
export interface IOriginator {
    store(value: number): Memento;
    restore(memento: Memento): number;
}
