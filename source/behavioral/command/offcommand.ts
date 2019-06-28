import { ICommand } from "./interface/command";
import { Turbine } from ".";

export class OffCommand implements ICommand {

    constructor(public turbine: Turbine) {
        this.turbine = turbine;
    }

    public execute() {
        this.turbine.off();
    }
}
