// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

/**
 * Sharepoint action button parameters
 */
export class ActionParameters {
    /**
     * Initializes a new instance of the ActionParameters class
     */
    public ActionParameters(){
        // Do nothing
    }

    /**
     * Sets view property of type string
     */
    public set view(view: string){
        this.view = view;
    }

    /**
     * Gets view property of type string
     */
    public get view(): string {
        return this.view;
    }
}