export declare class Color {
    r: number | string;
    g: number;
    b: number;
    static Black: Color;
    static Red: Color;
    static Green: Color;
    static Blue: Color;
    static HotPink: Color;
    static Orange: Color;
    static Pink: Color;
    static Purple: Color;
    static While: Color;
    static Yellow: Color;
    isKey: boolean;
    constructor(r: number | string, g?: number, b?: number);
    toBGR(): number;
    toJSON(): number;
    toString(): string;
}
export default Color;
