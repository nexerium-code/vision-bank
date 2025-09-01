export const ExampleTypes = {
    FALCONS: "FALCONS",
    POWR: "POWR",
    TU: "TU",
    PEAKS: "PEAKS",
    R8: "R8",
    LYNX: "LYNX"
} as const;

export type ExampleType = (typeof ExampleTypes)[keyof typeof ExampleTypes];
