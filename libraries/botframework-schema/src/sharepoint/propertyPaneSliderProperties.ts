// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { IPropertyPaneFieldProperties } from './IPropertyPaneFieldProperties';

/**
 * Sharepoint PropertyPaneSliderProperties object
 */
export class PropertyPaneSliderProperties implements IPropertyPaneFieldProperties{
    /**
     * Initializes a new instance of the PropertyPaneSliderProperties class
     */
    public PropertyPaneSliderProperties(){
        this.step = 1;
    }

    /**
     * Sets the label of type string
     */
    public set label(label: string){
        this.label = label;
    }

    /**
     * Gets the label of type string
     */
    public get label(): string {
        return this.label;
    }

    /**
     * Sets the value of type string
     */
    public set value(value: string){
        this.value = value;
    }

    /**
     * Gets the value of type string
     */
    public get value(): string {
        return this.value;
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
     * Sets the max value of the Slider of type number
     */
    public set max(max: number){
        this.max = max;
    }

    /**
     * Gets the max value of the Slider of type number
     */
    public get max(): number {
        return this.max;
    }

    /**
     * Sets the min value of the Slider of type number
     */
    public set min(min: number){
        this.min = min;
    }

    /**
     * Gets the min value of the Slider of type number
     */
    public get min(): number {
        return this.min;
    }

    /**
     * Sets the difference between the two adjacent values of the Slider. Defaults to 1. of type number
     */
    public set step(step: number){
        this.step = step;
    }

    /**
     * Gets the difference between the two adjacent values of the Slider. Defaults to 1. of type number
     */
    public get step(): number {
        return this.step;
    }

    /**
     * Sets a value indicating whether to show the value on the right of the Slider of type boolean
     */
    public set showValue(showValue: boolean){
        this.showValue = showValue;
    }

    /**
     * Gets a value indicating whether to show the value on the right of the Slider of type boolean
     */
    public get showValue(): boolean {
        return this.showValue;
    }
}