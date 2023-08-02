declare const regularIconSizes: readonly ['xs', 's', 'm', 'l', 'xl', 'xxl'];
declare type RegularIconSize = typeof regularIconSizes[number];
declare type LargeIconSize = number | string;

declare const sizeToValueMap: Record<RegularIconSize, number>;

declare const regularIconSizeDefault: RegularIconSize;
declare const largeIconSizeModule: number;
declare const largeIconSizeDefault: LargeIconSize;

interface IconSizeValidator {
  large: (value: LargeIconSize) => boolean;
  regular: (value: RegularIconSize) => boolean;
}
declare const iconSizeValidator: IconSizeValidator;

declare function validateGetLargeIconSize(sizeValue: LargeIconSize): { isValid: boolean, size: number };
declare function validateGetRegularIconSize(sizeValue: RegularIconSize): { isValid: boolean, size: number };

declare function getSvgProps(svgClasses: string, staticClasses: string, sizeValue: RegularIconSize | LargeIconSize | null, componentName: string): { width: string, height: string, class: string };

declare function normalizeIconName(name: string): string;

export {
    LargeIconSize,
    RegularIconSize,
    iconSizeValidator,
    largeIconSizeDefault,
    largeIconSizeModule,
    regularIconSizeDefault,
    regularIconSizes,
    sizeToValueMap,
    getSvgProps,
    normalizeIconName,
    validateGetLargeIconSize,
    validateGetRegularIconSize,
};
