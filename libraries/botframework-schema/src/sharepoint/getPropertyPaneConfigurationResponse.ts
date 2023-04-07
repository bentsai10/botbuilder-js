// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { PropertyPanePage } from './propertyPanePage';

/**
 * Sharepoint GetPropertyPaneConfiguration response object
 */
export class GetPropertyPaneConfigurationResponse {
    /**
     * Initializes a new instance of the GetPropertyPaneConfigurationResponse class
     */
    public GetPropertyPaneConfigurationResponse(){
        // Do nothing
    }

    /**
     * Sets pages property of type [PropertyPanePage]
     */
    public set pages(pages: [PropertyPanePage]){
        this.pages = pages;
    }

    /**
     * Gets the pages property of type [PropertyPanePage]
     */
    public get pages(): [PropertyPanePage] {
        return this.pages;
    }

    /**
     * Sets the current page property of type number
     */
    public set currentPage(currentPage: number){
        this.currentPage = currentPage;
    }

    /**
     * Gets current page property of type number
     */
    public get currentPage(): number {
        return this.currentPage;
    }

    /**
     * Sets the loading indicator delay time of type number
     */
    public set loadingIndicatorDelayTime(loadingIndicatorDelayTime: number){
        this.loadingIndicatorDelayTime = loadingIndicatorDelayTime;
    }

    /**
     * Gets the loading indicator delay time of type number
     */
    public get loadingIndicatorDelayTime(): number {
        return this.loadingIndicatorDelayTime;
    }

    /**
     * Sets a value indicating whether the loading indicator should be displayed on top
     * of the property pane or not of property of type boolean
     */
    public set showLoadingIndicator(showLoadingIndicator: boolean){
        this.showLoadingIndicator = showLoadingIndicator;
    }

    /**
     * Gets a value indicating whether the loading indicator should be displayed on top
     * of the property pane or not of property of type boolean
     */
    public get showLoadingIndicator(): boolean {
        return this.showLoadingIndicator;
    }
}