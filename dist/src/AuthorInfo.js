"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthorInfo {
    constructor(Contact = "TempRazerDev", Name = "razer@test.de") {
        this.Contact = Contact;
        this.Name = Name;
    }
    toJSON() {
        return {
            contact: this.Contact,
            name: this.Name,
        };
    }
}
exports.AuthorInfo = AuthorInfo;
//# sourceMappingURL=AuthorInfo.js.map