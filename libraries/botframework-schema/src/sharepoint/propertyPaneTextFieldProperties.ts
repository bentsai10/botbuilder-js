// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { IPropertyPaneFieldProperties } from './IPropertyPaneFieldProperties';

/**
 * Sharepoint PropertyPaneTextFieldProperties object
 */
export class PropertyPaneTextFieldProperties implements IPropertyPaneFieldProperties{
    /**
     * Initializes a new instance of the PropertyPaneTextFieldProperties class
     */
    public PropertyPaneTextFieldProperties(){
        // Do nothing
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
     * Sets the amount of time to wait before validating after the users stop typing in ms of type number
     */
    public set deferredValidationTime(deferredValidationTime: number){
        this.deferredValidationTime = deferredValidationTime;
    }

    /**
     * Gets the amount of time to wait before validating after the users stop typing in ms of type number
     */
    public get deferredValidationTime(): number {
        return this.deferredValidationTime;
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
     * Sets the error message of type string
     */
     public set errorMessage(errorMessage: string){
        this.errorMessage = errorMessage;
    }

    /**
     * Gets the error message of type string
     */
    public get errorMessage(): string {
        return this.errorMessage;
    }

    /**
     * Sets the name used to log PropertyPaneTextField value changes for engagement tracking of type string
     */
    public set logName(logName: string){
        this.logName = logName;
    }

    /**
     * Gets the name used to log PropertyPaneTextField value changes for engagement tracking of type string
     */
    public get logName(): string {
        return this.logName;
    }

    /**
     * Sets the maximum number of characters that the PropertyPaneTextField can have of type number
     */
    public set maxLength(maxLength: number){
        this.maxLength = maxLength;
    }

    /**
     * Gets the maximum number of characters that the PropertyPaneTextField can have of type number
     */
    public get maxLength(): number {
        return this.maxLength;
    }

    /**
     * Sets a value indicating whether or not the text field is a multiline text field of type boolean
     */
    public set multiline(multiline: boolean){
        this.multiline = multiline;
    }

    /**
     * Gets a value indicating whether or not the text field is a multiline text field of type boolean
     */
    public get multiline(): boolean {
        return this.multiline;
    }

    /**
     * Sets the placeholder text to be displayed in the text field of type string
     */
    public set placeholder(placeholder: string){
        this.placeholder = placeholder;
    }

    /**
     * Gets the placeholder text to be displayed in the text field of type string
     */
    public get placeholder(): string {
        return this.placeholder;
    }

    /**
     * Sets a value indicating whether or not the multiline text field is resizable of type boolean
     */
    public set resizable(resizable: boolean){
        this.resizable = resizable;
    }

    /**
     * Gets a value indicating whether or not the multiline text field is resizable of type boolean
     */
    public get resizable(): boolean {
        return this.resizable;
    }

    /**
     * Sets the value that specifies the visible height of a text area(multiline text TextField), 
     * in lines.maximum number of characters that the PropertyPaneTextField can have of type number
     */
    public set rows(rows: number){
        this.rows = rows;
    }

    /**
     * Gets the value that specifies the visible height of a text area(multiline text TextField), 
     * in lines.maximum number of characters that the PropertyPaneTextField can have of type number
     */
    public get rows(): number {
        return this.rows;
    }

    /**
     * Sets a value indicating whether or not the text field is underlined of type boolean
     */
    public set underlined(underlined: boolean){
        this.underlined = underlined;
    }

    /**
     * Gets a value indicating whether or not the text field is underlined of type boolean 
     */
    public get underlined(): boolean {
        return this.underlined;
    }

    /**
     * Sets a value indicating whether to run validation when the 
     * PropertyPaneTextField is focused of type boolean
     */
    public set validateOnFocusIn(validateOnFocusIn: boolean){
        this.validateOnFocusIn = validateOnFocusIn;
    }

    /**
     * Gets a value indicating whether to run validation when the 
     * PropertyPaneTextField is focused of type boolean
     */
    public get validateOnFocusIn(): boolean {
        return this.validateOnFocusIn;
    }

    /**
     * Sets a value indicating whether to run validation when the 
     * PropertyPaneTextField is out of focus or on blur of type boolean
     */
    public set validateOnFocusOut(validateOnFocusOut: boolean){
        this.validateOnFocusOut = validateOnFocusOut;
    }

    /**
     * Gets a value indicating whether to run validation when the 
     * PropertyPaneTextField is out of focus or on blur of type boolean
     */
    public get validateOnFocusOut(): boolean {
        return this.validateOnFocusOut;
    }
}