import { Memento } from "../memento";

export interface ICaretaker {

    values: Memento[];

    addMemento(memento: Memento): void;

    getMemento(index: number): Memento;
}
