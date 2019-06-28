import { ICaretaker } from "./interface/caretaker";
import { IOriginator } from "./interface/originator";
import { Memento } from "./memento";

class Caretaker implements ICaretaker {
    public values: Memento[];
    constructor() {
        this.values = [];
    }

    public addMemento(memento: Memento) {
        this.values.push(memento);
    }

    public getMemento(index: number) {
        return this.values[index];
    }
}

const originator: IOriginator = {
    store(val: number) {
        return new Memento(val);
    },
    restore(memento: Memento) {
        return memento.value;
    },
};

export {
    Caretaker,
    originator,
};
