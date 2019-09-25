export interface Device {
    id: number;
    value?: string;
    name?: string;
    width?: number;
    height?: number;
    screenOffset?: {
        top: number;
        left: number;
    };
}

export type NodeBound = {
    name: string;
    width: number;
    height: number;
    mask: string;
    x: number;
    y: number;
};
