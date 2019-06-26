import {
    IRequest,
} from "./interfaces";

export class Request implements IRequest {
    public url: string;
    public method: string;
    public payload: object;
    constructor() {
        this.url = "";
        this.method = "";
        this.payload = {};
    }
}
