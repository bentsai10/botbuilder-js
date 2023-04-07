// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { IPropertyPaneFieldProperties } from './IPropertyPaneFieldProperties';
import { PropertyPaneDropDownOption } from './propertyPaneDropDownOptions';

/**
 * Sharepoint PropertyPaneDropDownProperties object
 */
export class PropertyPaneDropDownProperties implements IPropertyPaneFieldProperties {
    /**
     * Initializes a new instance of the PropertyPaneDropDownProperties class
     */
    public PropertyPaneDropDownProperties(){
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
     * Sets an element's number or position in the current set of controls.
     * Maps to native aria-posinset attribute. It starts from 1 of type number
     */
    public set ariaPositionInSet(ariaPositionInSet: number){
        this.ariaPositionInSet = ariaPositionInSet;
    }

    /**
     * Gets an element's number or position in the current set of controls.
     * Maps to native aria-posinset attribute. It starts from 1 of type number
     */
    public get ariaPositionInSet(): number {
        return this.ariaPositionInSet;
    }

    /**
     * Sets the number of items in the current set of controls. Maps to native aria-setsize attribute of type number
     */
    public set ariaSetSize(ariaSetSize: number){
        this.ariaSetSize = ariaSetSize;
    }

    /**
     * Gets the number of items in the current set of controls. Maps to native aria-setsize attribute of type number
     */
    public get ariaSetSize(): number {
        return this.ariaPositionInSet;
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
     * Sets the error message of type string
     */
    public set errorMessage(errorMessage: string){
        this.errorMessage = errorMessage;
    }

    /**
     * Gets the error message of type string
     */
    public get errorMessage(): string {
        return this.errorMessage;
    }

    /**
     * Sets the key of the initially selected option of type string
     */
    public set selectedKey(selectedKey: string){
        this.selectedKey = selectedKey;
    }

    /**
     * Gets the key of the initially selected option of type string
     */
    public get selectedKey(): string {
        return this.selectedKey;
    }

    /**
     * Sets the collection of options for this Dropdown of type [PropertyPaneDropDownOption]
     */
    public set options(options: [PropertyPaneDropDownOption]){
        this.options = options;
    }

    /**
     * Gets the collection of options for this Dropdown of type [PropertyPaneDropDownOption]
     */
    public get options(): [PropertyPaneDropDownOption] {
        return this.options;
    }
}