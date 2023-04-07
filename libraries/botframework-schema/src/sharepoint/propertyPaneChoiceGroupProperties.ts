// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { IPropertyPaneFieldProperties } from './IPropertyPaneFieldProperties';
import { PropertyPaneChoiceGroupOption } from './propertyPaneChoiceGroupOption';

/**
 * Sharepoint PropertyPaneChoiceGroupProperties object
 */
export class PropertyPaneChoiceGroupProperties implements IPropertyPaneFieldProperties {
    /**
     * Initializes a new instance of the PropertyPaneChoiceGroupProperties class
     */
    public PropertyPaneChoiceGroupProperties(){
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
     * Sets the collection of options for this choice group of type [PropertyPaneChoiceGroupOption]
     */
     public set options(options: [PropertyPaneChoiceGroupOption]){
        this.options = options;
    }

    /**
     * Gets the collection of options for this choice group of type [PropertyPaneChoiceGroupOption]
     */
    public get options(): [PropertyPaneChoiceGroupOption] {
        return this.options;
    }
}