// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

/**
 * Sharepoint PropertyPanePageHeader object
 */
export class PropertyPanePageHeader{
    /**
     * Initializes a new instance of the PropertyPanePageHeader class
     */
    public PropertyPanePageHeader(){
        // Do nothing
    }

    /**
     * Sets the description of type string
     */
    public set description(description: string){
        this.description = description;
    }

    /**
     * Gets the description of type string
     */
    public get description(): string {
        return this.description;
    }
}