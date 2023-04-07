// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { ActionButton } from './actionButton';

/**
 * Sharepoint Card View Data object
 */
export class CardViewData {
    /**
     * Initializes a new instance of the CardViewData class
     */
    public CardViewData(){
        // Do nothing
    }

    /**
     * Sets actionButtons property of type [ActionButton]
     */
    public set actionButtons(actionButtons: [ActionButton]){
        this.actionButtons = actionButtons;
    }

    /**
     * Gets actionButtons property of type [ActionButton]
     */
    public get actionButtons(): [ActionButton] {
        return this.actionButtons;
    }

    /**
     * Sets primaryText property of type string
     */
    public set primaryText(primaryText: string){
        this.primaryText = primaryText;
    }

    /**
     * Gets primaryText property of type string
     */
    public get primaryText(): string {
        return this.primaryText;
    }
}