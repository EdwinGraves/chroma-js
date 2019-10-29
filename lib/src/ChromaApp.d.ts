import { AppInfo } from "./AppInfo";
import { ChromaInstance } from "./ChromaInstance";
export declare class ChromaApp {
    private activeInstance?;
    private data;
    constructor(appInfo: AppInfo);
    Instance(create?: boolean): Promise<ChromaInstance | null>;
}
