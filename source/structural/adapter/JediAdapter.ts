import { IJediAdapter } from "./interface/jediAdapter";
import { Jedi } from "./Jedi";

class JediAdapter implements IJediAdapter {
    public jedi: Jedi;
    constructor(jedi: Jedi) {
        this.jedi = jedi;
    }

    public attack() {
        return this.jedi.attackWithSaber();
    }
}

export {
    JediAdapter,
};
