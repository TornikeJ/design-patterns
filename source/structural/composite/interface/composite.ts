import { IEquipment } from "./equipment";

export interface IComposite {
    equipments: IEquipment[];
    add(equipment: IEquipment): void;
}
