// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { QuickViewBody } from "./quickViewBody";

/**
 * Sharepoint QuickViewTemplate object
 */
export class QuickViewTemplate {
    /**
     * Initializes a new instance of the QuickViewTemplate class
     */
    public QuickViewTemplate(){
        // Do nothing
    }

    /**
     * Sets the schema of type string
     */
    public set $schema($schema: string){
        this.$schema = $schema;
    }

    /**
     * Gets the schema of type string
     */
    public get $schema(): string {
        return this.$schema;
    }

    /**
     * Sets the type of type string
     */
    public set type(type: string){
        this.type = type;
    }

    /**
     * Gets the type of type string
     */
    public get type(): string {
        return this.type;
    }

    /**
     * Sets the version of type string
     */
    public set version(version: string){
        this.version = version;
    }

    /**
     * Gets the version of type string
     */
    public get version(): string {
        return this.version;
    }

    /**
     * Sets the version of type string
     */
    public set body(body: QuickViewBody){
        this.body = body;
    }

    /**
     * Gets the version of type string
     */
    public get body(): QuickViewBody {
        return this.body;
    }
}