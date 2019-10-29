export declare class AuthorInfo {
    Contact: string;
    Name: string;
    constructor(Contact?: string, Name?: string);
    toJSON(): {
        contact: string;
        name: string;
    };
}
