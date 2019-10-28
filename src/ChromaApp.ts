import {AppCategory, AppInfo} from "./AppInfo";
import {AvailableDevices} from "./Devices";

import {ChromaInstance} from "./ChromaInstance";
import fetch from "./request";

export class ChromaApp {
    private uninitpromise: any = null;
    private activeInstance?: Promise<ChromaInstance>;
    private data: AppInfo;

    constructor(appInfo: AppInfo) {
        this.activeInstance = undefined;
        this.data = appInfo;
    }

    public async Instance(create: boolean= true): Promise<ChromaInstance | null> {
        if (this.activeInstance) {
            const instance = await this.activeInstance;

            if (instance && !instance.destroyed) {
                return instance;
            } else {
                this.activeInstance = undefined;
            }
        }

        if (create) {
            const options = {
                body: JSON.stringify(this.data),
                headers: {"Content-Type": "application/json"},
                method: "post",
            };

            this.activeInstance = new Promise<ChromaInstance>(async (resolve, reject) => {
                try {
                  const response = await fetch("http://localhost:54235/razer/chromasdk", options);
                  const json = await response.json();
                  if (json.uri !== undefined) {
                    resolve(new ChromaInstance(json.uri));
                  }
                  reject("Unable to retrieve URI " + JSON.stringify(json));
                } catch (error) {
                  reject(error);
                }
            });

            return this.activeInstance;
        } else {
            return null;
        }
    }
}
