import { IJediAdapter } from './interface/jediAdapter';
import { Jedi } from './Jedi';

class JediAdapter implements IJediAdapter{
    jedi: Jedi;
    constructor(jedi:Jedi) {
        this.jedi = jedi;
    }

    attack() {
        return this.jedi.attackWithSaber();
    }
}

export {
    JediAdapter,
};
