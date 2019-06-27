import { IJedi } from "./interface/jediInterface";

class Jedi implements IJedi{
    public level: number;
    constructor(level:number) {
        this.level = level;
    }

    attackWithSaber() {
        return this.level * 1;
    }
}

export {
    Jedi,
};
