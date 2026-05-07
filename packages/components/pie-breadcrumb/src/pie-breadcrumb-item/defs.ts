type AriaProps = {
    label?: string;
};

export interface BreadcrumbItemProps {
    /**
     * The ARIA labels used for various parts of the breadcrumb item.
     */
    aria?: AriaProps;

    /**
    * The URL that the breadcrumb item links to
    */
    href?: string;
    /**
    * Where to display the linked URL such as _self, _blank, _parent or _top
    */
    target?: string;
}
