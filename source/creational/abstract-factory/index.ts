import { Droids, DroidType, IB1, IRx24 } from "./interface";
import { Rx24 } from "./Rx24";

function droidProducer(kind: DroidType): Droids {
    if (kind === "battle") {
        return battleDroidFactory;
    }

    return pilotDroidFactory;
}

function battleDroidFactory(): IB1 {
    return new B1();
}

function pilotDroidFactory(): IRx24 {
    return new Rx24();
}

class B1 implements IB1 {
    public info() {
        return "B1, Battle Droid";
    }
}

export default droidProducer;
