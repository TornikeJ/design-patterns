import { IB1 } from "./B1interface";
import { IRx24 } from "./Rx24Interface";
export type Droids = () => IRx24 | IB1;
export type DroidType = "battle"|void;
