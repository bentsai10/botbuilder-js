// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { IPropertyPaneFieldProperties } from './IPropertyPaneFieldProperties';

/**
 * Sharepoint PropertyPaneToggleProperties object
 */
export class PropertyPaneToggleProperties implements IPropertyPaneFieldProperties{
    /**
     * Initializes a new instance of the PropertyPaneToggleProperties class
     */
    public PropertyPaneToggleProperties(){
        // Do nothing
    }

    /**
     * Sets the aria label of type string
     */
    public set ariaLabel(ariaLabel: string){
        this.ariaLabel = ariaLabel;
    }

    /**
     * Gets the aria label of type string
     */
    public get ariaLabel(): string {
        return this.ariaLabel;
    }

    /**
     * Sets the label of type string
     */
    public set label(label: string){
        this.label = label;
    }

    /**
     * Gets the label of type string
     */
    public get label(): string {
        return this.label;
    }

    /**
     * Sets a value indicating whether this control is enabled or not of type boolean
     */
    public set disabled(disabled: boolean){
        this.disabled = disabled;
    }

    /**
     * Gets a value indicating whether this control is enabled or not of type boolean
     */
    public get disabled(): boolean {
        return this.disabled;
    }

    /**
     * Sets a value indicating whether the property pane checkbox is checked or not of type boolean
     */
    public set checked(checked: boolean){
        this.checked = checked;
    }

    /**
     * Gets a value indicating whether the property pane checkbox is checked or not of type boolean
     */
    public get checked(): boolean {
        return this.checked;
    }

    /**
     * Sets a key to uniquely identify the field of type string
     */
    public set key(key: string){
        this.key = key;
    }

    /**
     * Gets a key to uniquely identify the field of type string
     */
    public get key(): string {
        return this.key;
    }

    /**
     * Sets text to display when toggle is OFF of type string
     */
    public set offText(offText: string){
        this.offText = offText;
    }

    /**
     * Gets text to display when toggle is OFF of type string
     */
    public get offText(): string {
        return this.offText;
    }

    /**
     * Sets text to display when toggle is ON of type string
     */
    public set onText(onText: string){
        this.onText = onText;
    }

    /**
     * Gets text to display when toggle is ON of type string
     */
    public get onText(): string {
        return this.onText;
    }

    /**
     * Sets text for screen-reader to announce when toggle is OFF of type string
     */
    public set offAriaLabel(offAriaLabel: string){
        this.offAriaLabel = offAriaLabel;
    }

    /**
     * Gets text for screen-reader to announce when toggle is OFF of type string
     */
    public get offAriaLabel(): string {
        return this.offAriaLabel;
    }

    /**
     * Sets text for screen-reader to announce when toggle is ON of type string
     */
    public set onAriaLabel(onAriaLabel: string){
        this.onAriaLabel = onAriaLabel;
    }

    /**
     * Gets text for screen-reader to announce when toggle is ON of type string
     */
    public get onAriaLabel(): string {
        return this.onAriaLabel;
    }
}