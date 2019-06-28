import { Cockpit } from "./cockpit";
import { OffCommand } from "./offcommand";
import { OnCommand } from "./oncommand";

class Turbine {
    public state: boolean;

    constructor() {
        this.state = false;
    }

    public on() {
        this.state = true;
    }

    public off() {
        this.state = false;
    }
}

export { Cockpit, Turbine, OnCommand, OffCommand };
