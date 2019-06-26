import { IBmw } from "./bmwInterface";

export type Model = "X5" | "X6";

export interface BmwFactory {
    create(type: Model): IBmw;
}
