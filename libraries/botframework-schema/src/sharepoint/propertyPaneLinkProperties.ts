// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { IPropertyPaneFieldProperties } from './IPropertyPaneFieldProperties';
import { PropertyPaneLinkPopupWindowProperties } from './propertyPaneLinkPopupWindowProperties';

/**
 * Sharepoint PropertyPaneLinkProperties object
 */
export class PropertyPaneLinkProperties implements IPropertyPaneFieldProperties{
    /**
     * Initializes a new instance of the PropertyPaneLinkProperties class
     */
    public PropertyPaneLinkProperties(){
        // Do nothing
    }

    /**
     * Sets the label to display next to the checkbox of type string
     */
    public set text(text: string){
        this.text = text;
    }

    /**
     * Gets the label to display next to the checkbox of type string
     */
    public get text(): string {
        return this.text;
    }

    /**
     * Sets where to display the linked resource of type string
     */
    public set target(target: string){
        this.target = target;
    }

    /**
     * Gets where to display the linked resource of type string
     */
    public get target(): string {
        return this.target;
    }

    /**
     * Sets the location to which the link is targeted to of type string
     */
    public set href(href: string){
        this.href = href;
    }

    /**
     * Gets the location to which the link is targeted to of type string
     */
    public get href(): string {
        return this.href;
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
     * Sets the title of pop up window of type string
     */
    public set popupWindowProps(popupWindowProps: PropertyPaneLinkPopupWindowProperties ){
        this.popupWindowProps = popupWindowProps;
    }

    /**
     * Gets the title of pop up window of type string
     */
    public get popupWindowProps(): PropertyPaneLinkPopupWindowProperties {
        return this.popupWindowProps;
    }
}