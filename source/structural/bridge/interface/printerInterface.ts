import { Ink } from "../ink";

export interface IPrinter {
    ink: Ink;
    print(): string;
}
