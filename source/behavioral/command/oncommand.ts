import { ICommand } from "./interface/command";
import { Turbine } from ".";

export class OnCommand implements ICommand {

    constructor(public turbine: Turbine) {
        this.turbine = turbine;
    }

    public execute() {
        this.turbine.on();
    }
}
