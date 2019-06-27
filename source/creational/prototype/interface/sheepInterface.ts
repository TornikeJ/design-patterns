export interface ISheep {
    name: string;
    weight: number;

    clone(): ISheep;
}

export default ISheep;
