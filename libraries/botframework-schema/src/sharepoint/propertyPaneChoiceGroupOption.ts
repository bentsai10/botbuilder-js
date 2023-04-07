// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { PropertyPaneChoiceGroupIconProperties } from './propertyPaneChoiceGroupIconProperties';
import { PropertyPaneChoiceGroupImageSize } from './propertyPaneChoiceGroupImageSize';

/**
 * Sharepoint PropertyPaneChoiceGroupOption object
 */
export class PropertyPaneChoiceGroupOption{
    /**
     * Initializes a new instance of the PropertyPaneChoiceGroupOption class
     */
    public PropertyPaneChoiceGroupOption(){
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
     * Sets a value indicating whether the property pane group option is checked or not of type boolean
     */
    public set checked(checked: boolean){
        this.checked = checked;
    }

    /**
     * Gets a value indicating whether the property pane group option is checked or not of type boolean
     */
    public get checked(): boolean {
        return this.checked;
    }

    /**
     * Sets the Icon component props for choice field of type PropertyPaneChoiceGroupIconProperties
     */
    public set iconProps(iconProps: PropertyPaneChoiceGroupIconProperties){
        this.iconProps = iconProps;
    }

    /**
     * Gets the Icon component props for choice field of type PropertyPaneChoiceGroupIconProperties
     */
    public get iconProps(): PropertyPaneChoiceGroupIconProperties {
        return this.iconProps;
    }

    /**
     * Sets the width and height of the image in px for choice field of type PropertyPaneChoiceGroupImageSize
     */
     public set imageSize(imageSize: PropertyPaneChoiceGroupImageSize){
        this.imageSize = imageSize;
    }

    /**
     * Gets the width and height of the image in px for choice field of type PropertyPaneChoiceGroupImageSize
     */
    public get imageSize(): PropertyPaneChoiceGroupImageSize {
        return this.imageSize;
    }

    /**
     * Sets the src of image for choice field of type string
     */
     public set imageSrc(imageSrc: string){
        this.imageSrc = imageSrc;
    }

    /**
     * Gets the src of image for choice field of type string
     */
    public get imageSrc(): string {
        return this.imageSrc;
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
}