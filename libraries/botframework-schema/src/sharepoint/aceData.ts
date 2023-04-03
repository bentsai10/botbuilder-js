// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

export enum AceCardSize {
    Small,
    Medium,
    Large
}

export class AceData {
    /**
     * Sharepoint Ace Data object
     */
    public AceData(){
        // Do nothing
    }

    /**
     * Sets card size property of type AceCardSize
     */
    public set CardSize(cardSize: AceCardSize){
        this.CardSize = cardSize;
    }

    /**
     * Gets card size property of type AceCardSize
     */
    public get CardSize(): AceCardSize {
        return this.CardSize;
    }

    /**
     * Sets data version property of type string
     */
    public set DataVersion(dataVersion: string){
        this.DataVersion = dataVersion;
    }

    /**
     * Gets data version property of type string
     */
    public get DataVersion(): string {
        return this.DataVersion; 
    }

    /**
     * Sets id property of type string
     */
    public set Id(id: string) {
        this.Id = id;
    }

    /**
     * Gets id property of type string
     */
    public get Id(): string {
        return this.Id;
    }

    /**
     * Sets title property of type string
     */
    public set Title(title: string){
        this.Title = title;
    }

    /**
     * Gets title property of type string
     */
    public get Title(): string {
        return this.Title;
    }

    /**
     * Sets icon property of type string
     */
    public set IconProperty(iconProperty: string){
        this.IconProperty = iconProperty;
    }

    /**
     * Gets icon property of type string
     */
    public get IconProperty(): string{
        return this.IconProperty;
    }
}