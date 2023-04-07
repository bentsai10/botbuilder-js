// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

export enum AceCardSize {
    Small,
    Medium,
    Large
}

/**
 * Sharepoint Ace Data object
 */
export class AceData {
    
    /**
     * Initializes a new instance of the AceData class
     */
    public AceData(){
        // Do nothing
    }

    /**
     * Sets card size property of type AceCardSize
     */
    public set cardSize(cardSize: AceCardSize){
        this.cardSize = cardSize;
    }

    /**
     * Gets card size property of type AceCardSize
     */
    public get cardSize(): AceCardSize {
        return this.cardSize;
    }

    /**
     * Sets data version property of type string
     */
    public set dataVersion(dataVersion: string){
        this.dataVersion = dataVersion;
    }

    /**
     * Gets data version property of type string
     */
    public get dataVersion(): string {
        return this.dataVersion; 
    }

    /**
     * Sets id property of type string
     */
    public set id(id: string) {
        this.id = id;
    }

    /**
     * Gets id property of type string
     */
    public get id(): string {
        return this.id;
    }

    /**
     * Sets title property of type string
     */
    public set title(title: string){
        this.title = title;
    }

    /**
     * Gets title property of type string
     */
    public get title(): string {
        return this.title;
    }

    /**
     * Sets icon property of type string
     */
    public set iconProperty(iconProperty: string){
        this.iconProperty = iconProperty;
    }

    /**
     * Gets icon property of type string
     */
    public get iconProperty(): string{
        return this.iconProperty;
    }
}