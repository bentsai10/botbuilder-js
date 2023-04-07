// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

export enum DropDownOptionType{
    // Render normal menu item
    Normal = 0,
    // Render a divider
    Divider = 1,
    // Render menu item as a header
    Header = 2
}

/**
 * Sharepoint PropertyPaneDropDownOption object
 */
export class PropertyPaneDropDownOption {
    /**
     * Initializes a new instance of the PropertyPaneDropDownOption class
     */
    public PropertyPaneDropDownOption(){
        // Do nothing
    }

    /**
     * Sets index for this option of type number
     */
    public set index(index: number){
        this.index = index;
    }

    /**
     * Gets index for this option of type number
     */
    public get index(): number {
        return this.index;
    }

    /**
     * Sets a key to uniquely identify this option of type string
     */
    public set key(key: string){
        this.key = key;
    }

    /**
     * Gets a key to uniquely identify this option of type string
     */
    public get key(): string {
        return this.key;
    }

    /**
     * Sets text to render for this option of type string
     */
    public set text(text: string){
        this.text = text;
    }

    /**
     * Gets text to render for this option of type string
     */
    public get text(): string {
        return this.text;
    }

    /**
     * Sets the type of option. If omitted, the default is PropertyPaneDropdownMenuItemType.Normal of type DropDownOptionType
     */
    public set type(type: DropDownOptionType){
        this.type = type;
    }

    /**
     * Gets the type of option. If omitted, the default is PropertyPaneDropdownMenuItemType.Normal of type DropDownOptionType
     */
    public get type(): DropDownOptionType {
        return this.type;
    }
}