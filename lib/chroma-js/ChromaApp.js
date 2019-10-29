"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ChromaInstance_1 = require("./ChromaInstance");
const request_1 = require("./request");
class ChromaApp {
    constructor(appInfo) {
        this.activeInstance = undefined;
        this.data = appInfo;
    }
    Instance(create = true) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.activeInstance) {
                const instance = yield this.activeInstance;
                if (instance && !instance.destroyed) {
                    return instance;
                }
                else {
                    this.activeInstance = undefined;
                }
            }
            if (create) {
                const options = {
                    body: JSON.stringify(this.data),
                    headers: { "Content-Type": "application/json" },
                    method: "post",
                };
                this.activeInstance = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                    try {
                        const response = yield request_1.default("http://localhost:54235/razer/chromasdk", options);
                        const json = yield response.json();
                        if (json.uri !== undefined) {
                            resolve(new ChromaInstance_1.ChromaInstance(json.uri));
                        }
                        reject("Unable to retrieve URI " + JSON.stringify(json));
                    }
                    catch (error) {
                        reject(error);
                    }
                }));
                return this.activeInstance;
            }
            else {
                return null;
            }
        });
    }
}
exports.ChromaApp = ChromaApp;
//# sourceMappingURL=ChromaApp.js.map