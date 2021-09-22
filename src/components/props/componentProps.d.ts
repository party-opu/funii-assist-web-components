/// <reference types="react" />
import { AppV1_NodeMap, Action, AppV1_List, AppV1_Frame } from '@party-opu/funii-assist-types';
export declare type ArtboardSize = 'desktop' | 'tablet' | 'mobile';
export declare const DESKTOP_MIN_WIDTH = 1200;
export declare const TABLET_MIN_WIDTH = 700;
export declare type ActionHandler = (action: Action) => Promise<void> | void;
export declare type ComponentProps<T = AppV1_NodeMap, U = any, P = any> = {
    node: T;
    actionHandler?: ActionHandler;
    paths?: string[];
    screenItemData?: U;
    listItemData?: P;
    children?: React.ReactNode;
};
export declare type ListProps<T = AppV1_List, U = {
    [key: string]: any;
}> = {
    node: T;
    testItems?: U[];
    renderItem: ({ item }: {
        item: U;
    }) => React.ReactNode;
};
export declare type FrameProps<T = AppV1_Frame> = {
    node: T;
    children?: React.ReactNode;
};
//# sourceMappingURL=componentProps.d.ts.map