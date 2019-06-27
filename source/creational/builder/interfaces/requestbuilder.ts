import {IRequest} from "./request";

export interface IRequestBuilder {
    forUrl(url: string): IRequestBuilder;
    useMethod(method: string): IRequestBuilder;
    payload(payload: object): IRequestBuilder;
    build(): IRequest;
}
