import { Airplane } from ".";
import { ITrafficTower } from "./interface/traffictower";

export class TrafficTower implements ITrafficTower {
    public airplanes: Airplane[];

    constructor() {
        this.airplanes = [];
    }

    public requestPositions() {
        return this.airplanes.map((airplane) => {
            return airplane.position;
        });
    }
}
