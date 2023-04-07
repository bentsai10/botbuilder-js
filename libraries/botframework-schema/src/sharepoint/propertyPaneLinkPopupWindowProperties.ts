// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

export enum PopupWindowPosition{
    Center = 0,
    RightTop = 1,
    LeftTop = 2,
    RightBottom = 3,
    LeftBottom = 4
}

/**
 * Sharepoint PropertyPaneLinkPopupWindowProperties object
 */
export class PropertyPaneLinkPopupWindowProperties {
    /**
     * Initializes a new instance of the PropertyPaneLinkPopupWindowProperties class
     */
    public PropertyPaneLinkPopupWindowProperties(){
        // Do nothing
    }

     /**
     * Sets the width of the pop up window of type number
     */
     public set width(width: number){
        this.width = width;
    }

    /**
     * Gets the width of the pop up window of type number
     */
    public get width(): number {
        return this.width;
    }

    /**
     * Sets the height of the pop up window of type number
     */
    public set height(height: number){
        this.height = height;
    }

    /**
     * Gets the height of the pop up window of type number
     */
    public get height(): number {
        return this.height;
    }

    /**
     * Sets the title of pop up window of type string
     */
    public set title(title: string){
        this.title = title;
    }

    /**
     * Gets the title of pop up window of type string
     */
    public get title(): string {
        return this.title;
    }

    /**
     * Sets the position of pop up window type PopupWindowPosition
     */
     public set positionWindowPosition(positionWindowPosition: PopupWindowPosition){
        this.positionWindowPosition = positionWindowPosition;
    }

    /**
     * Gets the position of pop up window type PopupWindowPosition
     */
    public get positionWindowPosition(): PopupWindowPosition {
        return this.positionWindowPosition;
    }
}