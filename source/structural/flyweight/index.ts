import { Color } from "./Color";
import { IcolorFactory } from "./interfaces/colorFactoryInterface";

class ColorFactory implements IcolorFactory {
    public colors: {
        [key: string]: Color,
    };
    constructor(name: string) {
        this.colors = {};
    }
    public create(name: string): Color {
        const color = this.colors[name];
        if (color) {
            return color;
        }
        this.colors[name] = new Color(name);
        return this.colors[name];
    }
}

export {
    ColorFactory,
};
