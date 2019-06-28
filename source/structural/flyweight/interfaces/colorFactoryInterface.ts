import { Color } from "../Color";

export interface IcolorFactory {
    create(name: string): Color;
}
