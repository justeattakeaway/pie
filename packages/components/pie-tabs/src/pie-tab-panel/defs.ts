export interface TabPanelProps {
    /**
    * Tab's title.
    * This is used to display the title of the tab in the tab list.
    */
    title: string;
    /**
     * Optional property to indicate if the tab panel is selected.
     * If true, the tab panel will be displayed as selected.
     */
    selected?: boolean;
    /**
     * Optional property to indicate if the tab panel is disabled.
     * If true, the tab panel will be displayed as disabled and not selectable.
     */
    disabled?: boolean;
}
