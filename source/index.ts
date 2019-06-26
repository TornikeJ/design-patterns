import { RequestBuilder } from "./builder";
import { Request } from "./builder/Request";
import { BmwFactory } from "./factory";
import Sheep from "./prototype/Sheep";

const builder = new RequestBuilder();

const request: Request = builder.forUrl("google.com").useMethod("GET").payload({ subject: "Development" }).build();
console.log({ request });

const factory = BmwFactory.create("X5");

console.log(factory);

const sheep = new Sheep("beee", 50);

console.log(sheep);
console.log(sheep.clone());
