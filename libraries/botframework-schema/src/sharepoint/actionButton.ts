// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { Action } from './action';

/**
 * Sharepoint action button
 */
export class ActionButton {
    /**
     * Initializes a new instance of the ActionButton class
     */
    public ActionButton(){
        // Do nothing
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
     * Sets parameters property of type Action
     */
    public set action (action: Action){
        this.action = action;
    }

    /**
     * Gets parameters property of type Action
     */
    public get action(): Action {
        return this.action; 
    }
}