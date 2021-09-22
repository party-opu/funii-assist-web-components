import { StorageFile, Variable } from '@party-opu/funii-assist-types';
declare type ListItemData = {
    [key: string]: any;
};
declare type CalcOption = {
    listItemData?: ListItemData;
};
export declare const calcText: (text: (string | Variable)[], option?: CalcOption | undefined) => string;
export declare const calcImages: (images: (StorageFile | Variable)[], option?: CalcOption | undefined) => {
    size: any;
    url: any;
}[];
export {};
//# sourceMappingURL=calc.d.ts.map