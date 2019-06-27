import { Droid } from "./interface";
import {Rx24} from "./Rx24";

type droidType = "battle" | "pilot";

function droidProducer(kind: droidType) {
    if (kind === "battle") {
        return battleDroidFactory;
    }

    return pilotDroidFactory;
}

function battleDroidFactory(): Droid {
    return new B1();
}

function pilotDroidFactory(): Droid {
    return new Rx24();
}

class B1 implements Droid {
    public info() {
        return "B1, Battle Droid";
    }
}

export default droidProducer;
