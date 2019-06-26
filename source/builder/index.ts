import { Request } from "./Request";
import { RequestBuilder } from "./RequestBuilder";

const builder = new RequestBuilder();

const request: Request = builder.forUrl("google.com").useMethod("GET").payload({ subject: "Development" }).build();
console.log({ request });
