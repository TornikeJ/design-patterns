import { RequestBuilder } from "./builder";
import { Request } from "./builder/Request";
import { BmwFactory } from "./factory";

const builder = new RequestBuilder();

const request: Request = builder.forUrl("google.com").useMethod("GET").payload({ subject: "Development" }).build();
console.log({ request });

const factory = BmwFactory.create("X5");

console.log(factory);
