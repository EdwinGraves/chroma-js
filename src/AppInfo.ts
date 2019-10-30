import { AppCategory } from "./AppCategory";
import { AuthorInfo } from "./AuthorInfo";
import { AvailableDevices } from "./Devices";

export class AppInfo {

    constructor(
        public Title: string,
        public Description: string = "",
        public Author: AuthorInfo = new AuthorInfo(),
        public DeviceSupported: AvailableDevices[] = [
            AvailableDevices.Keyboard,
            AvailableDevices.Mouse,
            AvailableDevices.Headset,
            AvailableDevices.Mousepad,
            AvailableDevices.Keypad,
            AvailableDevices.ChromaLink,
        ],
        public Category: AppCategory = AppCategory.Application) { }

    public toJSON() {
        return {
            author: this.Author,
            category: this.Category,
            description: this.Description,
            device_supported: this.DeviceSupported,
            title: this.Title,
        };
    }

}
