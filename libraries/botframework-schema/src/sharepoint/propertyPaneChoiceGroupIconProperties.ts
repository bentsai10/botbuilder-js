// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

/**
 * Sharepoint PropertyPaneChoiceGroupIconProperties object
 */
export class PropertyPaneChoiceGroupIconProperties{
    /**
     * Initializes a new instance of the PropertyPaneChoiceGroupIconProperties class
     */
    public PropertyPaneChoiceGroupIconProperties(){
        // Do nothing
    }

    /**
     * Sets the name of the icon to use from the Office Fabric icon set of type string
     */
    public set officeFabricIconFontName(officeFabricIconFontName: string){
        this.officeFabricIconFontName = officeFabricIconFontName;
    }

    /**
     * Gets the name of the icon to use from the Office Fabric icon set of type string
     */
    public get officeFabricIconFontName(): string {
        return this.officeFabricIconFontName;
    }
}