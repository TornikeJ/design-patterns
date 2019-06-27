import droidProducer from "./creational/abstract-factory";
import RequestBuilder from "./creational/builder";
import Request from "./creational/builder/Request";
import BmwFactory from "./creational/factory";
import Sheep from "./creational/prototype/Sheep";
import Person from "./creational/singleton";

const builder = new RequestBuilder();

const request: Request = builder.forUrl("google.com").useMethod("GET").payload({ subject: "Development" }).build();
console.log({ request });

const factory = BmwFactory.create("X5");

console.log(factory);

const sheep = new Sheep("beee", 50);

console.log(sheep);
console.log(sheep.clone());

const person = new Person();
console.log(person);

const droid = droidProducer("battle");

console.log(droid().info());
