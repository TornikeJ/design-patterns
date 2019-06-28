import { Equipment } from "./equipment";
import { IComposite, IEquipment } from "./interface";

export class Composite extends Equipment implements IComposite {

    public equipments: IEquipment[];

    constructor() {
        super();
        this.equipments = [];
    }

    public add(equipment: IEquipment) {
        this.equipments.push(equipment);
    }

    public getPrice() {
        return this.equipments.map((equipment) => {
            return equipment.getPrice();
        }).reduce((a, b) => {
            return a + b;
        });
    }
}
