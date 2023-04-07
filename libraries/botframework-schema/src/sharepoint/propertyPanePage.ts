// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { IPropertyPaneGroupOrConditionalGroup } from './IPropertyPaneGroupOrConditionalGroup';
import { PropertyPanePageHeader } from './propertyPanePageHeader';

/**
 * Sharepoint PropertyPanePage object
 */
export class PropertyPanePage{
    /**
     * Initializes a new instance of the PropertyPanePage class
     */
    public PropertyPanePage(){
        // Do nothing
    }

    /**
     * Sets a value indicating whether the groups on the PropertyPanePage 
     * are displayed as accordion or not of type boolean
     */
    public set displayGroupsAsAccordion(displayGroupsAsAccordion: boolean){
        this.displayGroupsAsAccordion = displayGroupsAsAccordion;
    }

    /**
     * Gets a value indicating whether the groups on the PropertyPanePage 
     * are displayed as accordion or not of type boolean
     */
    public get displayGroupsAsAccordion(): boolean {
        return this.displayGroupsAsAccordion;
    }


    /**
     * Sets the groups of type IPropertyPaneGroupOrConditionalGroup
     */
    public set groups(groups: [IPropertyPaneGroupOrConditionalGroup] ){
        this.groups = groups;
    }

    /**
     * Gets the groups of type IPropertyPaneGroupOrConditionalGroup
     */
    public get groups(): [IPropertyPaneGroupOrConditionalGroup] {
        return this.groups;
    }

    /**
     * Sets the header for the property pane of type PropertyPanePageHeader
     */
    public set header(header: PropertyPanePageHeader ){
        this.header = header;
    }

    /**
     * Gets the header for the property pane of type PropertyPanePageHeader
     */
    public get header(): PropertyPanePageHeader {
        return this.header;
    }
}