// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { ActionParameters } from './actionParameters';

/**
 * Sharepoint action
 */
export class Action {
    /**
     * Initializes a new instance of the Action class
     */
    public Action(){
        // Do nothing
    }

    /**
     * Sets type property of type string
     */
    public set type(type: string){
        this.type = type;
    }

    /**
     * Gets type property of type string
     */
    public get type(): string {
        return this.type;
    }

    /**
     * Sets parameters property of type ActionParameters
     */
    public set parameters (parameters: ActionParameters){
        this.parameters = parameters;
    }

    /**
     * Gets parameters property of type ActionParameters
     */
    public get parameters(): ActionParameters {
        return this.parameters; 
    }
}