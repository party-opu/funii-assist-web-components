import React from 'react';
import { Property } from 'csstype';
import { AlignHorizontal, AlignVertical, AppV1_Button, AppV1_Frame, AppV1_Image, AppV1_List, AppV1_ListItem, AppV1_Space, AppV1_Typography, AxisAlign, Color, SizingMode, SolidPaint } from '@party-opu/funii-assist-types';
declare class ReactStyleTranspiler {
    constructor(pxUnit?: number);
    pxUnit: number;
    private isHex;
    private isRgba;
    private hexToColor;
    private rgbaToColor;
    toCSSColor: (color: Color) => Property.Color;
    toColor: (colorCode: string, a?: number | undefined) => {
        a: number;
        r: number;
        g: number;
        b: number;
    };
    toCSSPadding: (padding: number[]) => Property.Padding;
    toCSSBorderRadius: (cornerRadius: number[]) => Property.BorderRadius;
    toCssWidth: (width: number | null, sizingMode: SizingMode) => (string & {}) | "auto";
    toCssHeight: (height: number | null, sizingMode: SizingMode) => (string & {}) | "auto";
    toCssBorder: (stroke: SolidPaint | null, strokeWeight: number) => Property.Border;
    toCssTextAlign: (alignHorizontal: AlignHorizontal) => Property.TextAlign;
    toCssVerticalAlign: (alignVertical: AlignVertical) => Property.VerticalAlign;
    toCssJustifyContent: (alignHorizontal: AlignHorizontal | AxisAlign) => Property.JustifyContent;
    toCssAlignItems: (alignVertical: AlignVertical | AxisAlign) => Property.AlignItems;
    typographyTranspile: (node: AppV1_Typography) => React.CSSProperties;
    imageTranspile: (node: AppV1_Image, imageURL?: string | undefined) => {
        imagesStyle: React.CSSProperties;
        imageStyle: React.CSSProperties;
    };
    spaceTranspile: (node: AppV1_Space) => React.CSSProperties;
    buttonTranspile: (node: AppV1_Button) => {
        containerStyle: React.CSSProperties;
        buttonStyle: React.CSSProperties;
        iconStyle: React.CSSProperties;
        typographyStyle: React.CSSProperties;
    };
    listTranspile: (node: AppV1_List) => {
        containerStyle: React.CSSProperties;
        listStyle: React.CSSProperties;
    };
    listItemTranspile: (node: AppV1_ListItem) => {
        containerStyle: React.CSSProperties;
        listItemStyle: React.CSSProperties;
        iconStyle: React.CSSProperties;
        primaryTextStyle: React.CSSProperties;
        secondaryTextStyle: React.CSSProperties;
    };
    frameTranspile: (node: AppV1_Frame) => {
        containerStyle: React.CSSProperties;
        frameStyle: React.CSSProperties;
    };
}
declare const transpiler: ReactStyleTranspiler;
export default transpiler;
//# sourceMappingURL=transpiler.d.ts.map