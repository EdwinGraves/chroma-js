import { Animation } from "./Animation";
import DeviceContainer from "./Devices";
import { IDeviceData } from "./Devices/Base";
export declare class ChromaInstance extends DeviceContainer {
    destroyed: boolean;
    private url;
    private interval?;
    private activeAnimation?;
    constructor(url: string);
    playAnimation(animation: Animation): Promise<Animation>;
    stopAnimation(): Promise<void>;
    destroy(): Promise<boolean>;
    heartbeat(): Promise<Response | undefined>;
    send(container?: DeviceContainer): Promise<any[] | undefined>;
    sendDeviceUpdate(devices: IDeviceData[], store?: boolean): Promise<any[]>;
    setEffect(effectids: string[]): Promise<void>;
    deleteEffect(effectids: string[]): Promise<void>;
}
