import { ISoldier } from "./interface/soldierInterface";

class Soldier implements ISoldier {
    public level: number;
    constructor(level: number) {
        this.level = level;
    }

    public attack() {
        return this.level * 1;
    }
}

export {
    Soldier,
};
