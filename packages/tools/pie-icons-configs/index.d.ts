declare const regularIconSizes: readonly ['xs', 's', 'm', 'l', 'xl', 'xxl'];
type RegularIconSize = typeof regularIconSizes[number];
type LargeIconSize = number | string;

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

declare function getSvgProps(svgClasses: string, staticClasses: string, sizeValue: RegularIconSize | LargeIconSize, componentName: string): object;

declare function normalizeIconName(name: string): string;

export {
    regularIconSizes,
    sizeToValueMap,
    regularIconSizeDefault,
    largeIconSizeModule,
    largeIconSizeDefault,
    iconSizeValidator,
    validateGetLargeIconSize,
    validateGetRegularIconSize,
    getSvgProps,
    normalizeIconName,
};
