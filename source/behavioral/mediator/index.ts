import { IAirplane } from "./interface/airplane";
import { TrafficTower } from "./traffictower";

class Airplane implements IAirplane {
    public position: number;
    public trafficTower: TrafficTower;

    constructor(position: number, trafficTower: TrafficTower) {
        this.position = position;
        this.trafficTower = trafficTower;
        this.trafficTower.airplanes.push(this);
    }

    public requestPositions() {
        return this.trafficTower.requestPositions();
    }
}

export {
    TrafficTower,
    Airplane,
};
