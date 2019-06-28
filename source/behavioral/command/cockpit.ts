import { ICommand } from "./interface/command";

export class Cockpit implements ICommand {
    public command: ICommand;
    constructor(command: ICommand) {
        this.command = command;
    }

    public execute() {
        this.command.execute();
    }
}
