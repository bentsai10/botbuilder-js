// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

/**
 * Sharepoint QuickViewItem object
 */
export class QuickViewItem {
    /**
     * Initializes a new instance of the QuickViewItem class
     */
    public QuickViewItem(){
        // Do nothing
    }

    /**
     * Sets the type of type string
     */
    public set type(type: string){
        this.type = type;
    }

    /**
     * Gets the type of type string
     */
    public get type(): string {
        return this.type;
    }

     /**
     * Sets a value indicating whether the separator exists of type boolean
     */
     public set separator(separator: boolean){
        this.separator = separator;
    }

    /**
     * Gets a value indicating whether the separator exists of type boolean
     */
    public get separator(): boolean {
        return this.separator;
    }
    /**
     * Sets the items of type QuickViewItem
     */
    public set items(items: [QuickViewItem]){
        this.items = items;
    }

    /**
     * Gets the items of type QuickViewItem
     */
    public get items(): [QuickViewItem] {
        return this.items;
    }
}