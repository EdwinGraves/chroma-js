export class AuthorInfo {

    constructor(
        public Contact: string = "TempRazerDev",
        public Name: string = "razer@test.de") { }

    public toJSON() {
        return {
            contact: this.Contact,
            name: this.Name,
        };
    }
}
