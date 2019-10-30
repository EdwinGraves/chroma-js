export function IsNullOrEmpty(str: string): boolean {
    return str == null || str.trim().length === 0;
}

export * from "./ChromaApp";
export * from "./ChromaInstance";
export * from "./AppInfo";
export * from "./AppCategory";
export * from "./AuthorInfo";
export * from "./Color";
export * from "./Key";
export * from "./Devices/Base";
export * from "./Animation";
export * from "./Animations/BcaAnimation";
export * from "./Animations/WaveAnimation";
export * from "./Devices";
