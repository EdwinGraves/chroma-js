"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AuthorInfo_1 = require("./AuthorInfo");
const Devices_1 = require("./Devices");
var AppCategory;
(function (AppCategory) {
    AppCategory[AppCategory["Application"] = "application"] = "Application";
    AppCategory[AppCategory["Game"] = "game"] = "Game";
})(AppCategory = exports.AppCategory || (exports.AppCategory = {}));
class AppInfo {
    constructor(Title, Description = "", Author = new AuthorInfo_1.AuthorInfo(), DeviceSupported = [
        Devices_1.AvailableDevices.Keyboard,
        Devices_1.AvailableDevices.Mouse,
        Devices_1.AvailableDevices.Headset,
        Devices_1.AvailableDevices.Mousepad,
        Devices_1.AvailableDevices.Keypad,
        Devices_1.AvailableDevices.ChromaLink,
    ], Category = AppCategory.Application) {
        this.Title = Title;
        this.Description = Description;
        this.Author = Author;
        this.DeviceSupported = DeviceSupported;
        this.Category = Category;
    }
    toJSON() {
        return {
            author: this.Author,
            category: this.Category,
            description: this.Description,
            device_supported: this.DeviceSupported,
            title: this.Title,
        };
    }
}
exports.AppInfo = AppInfo;
//# sourceMappingURL=AppInfo.js.map