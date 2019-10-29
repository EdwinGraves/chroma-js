"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Color {
    constructor(r, g = Number.NaN, b = Number.NaN) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.isKey = false;
        if (isNaN(g) && isNaN(b) && r) {
            if (typeof r === "string") {
                const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);
                if (result) {
                    this.r = parseInt(result[1], 16);
                    this.g = parseInt(result[2], 16);
                    this.b = parseInt(result[3], 16);
                }
            }
            else {
                this.b = (r >> 16) & 0xff; // tslint:disable-line:no-bitwise
                this.g = (r >> 8) & 0xff; // tslint:disable-line:no-bitwise
                this.r = (r >> 0) & 0xff; // tslint:disable-line:no-bitwise
            }
        }
        else {
            this.r = Math.round(r);
            this.g = Math.round(g);
            this.b = Math.round(b);
        }
        Math.min(Math.max(this.r, 0), 255);
        Math.min(Math.max(this.g, 0), 255);
        Math.min(Math.max(this.b, 0), 255);
    }
    toBGR() {
        let rhex = this.r.toString(16);
        if (rhex.length < 2) {
            rhex = "0" + rhex;
        }
        let ghex = this.g.toString(16);
        if (ghex.length < 2) {
            ghex = "0" + ghex;
        }
        let bhex = this.b.toString(16);
        if (bhex.length < 2) {
            bhex = "0" + bhex;
        }
        let result = bhex + ghex + rhex;
        if (this.isKey) {
            result = "ff" + result;
        }
        return parseInt(result, 16);
    }
    toJSON() {
        return this.toBGR();
    }
    toString() {
        return this.r + " " + this.g + " " + this.b;
    }
}
exports.Color = Color;
Color.Black = new Color("000000");
Color.Red = new Color("ff0000");
Color.Green = new Color("00ff00");
Color.Blue = new Color("0000ff");
Color.HotPink = new Color(255, 105, 180);
Color.Orange = new Color("ffa500");
Color.Pink = new Color("ff00ff");
Color.Purple = new Color("800080");
Color.While = new Color(255, 255, 255);
Color.Yellow = new Color(255, 255, 0);
exports.default = Color;
//# sourceMappingURL=Color.js.map