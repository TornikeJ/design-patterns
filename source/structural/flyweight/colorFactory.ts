// import {IcolorFactor} from "./interfaces"
import { Color } from "./Color";
import { IcolorFactory } from "./interfaces/colorFactoryInterface";

class ColorFactory implements IcolorFactory {
    public colors: {
        name: string,
    };
    constructor(name: string) {
        this.colors = {
            name,
        };
    }
    create(name: string) {
        const color: string = this.colors[name];
        if (color) return color;
        this.colors[name] = new Color(name);
        return this.colors[name];
    }
}

export {
    colorFactory
};
