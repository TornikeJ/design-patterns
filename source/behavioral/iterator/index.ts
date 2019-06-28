class Iterator<T> {
    public index: number;
    public elements: T[];

    constructor(el: T[]) {
        this.index = 0;
        this.elements = el;
    }

    public next(): T {
        return this.elements[this.index++];
    }

    public hasNext(): boolean {
        return this.index < this.elements.length;
    }
}

export default Iterator;
