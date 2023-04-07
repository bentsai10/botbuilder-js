// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { AceData } from './aceData';
import { CardViewData } from './cardViewData';

export enum CardViewTemplateType {
    PrimaryTextCardView,
    ImageCardView,
    BasicCardView
}

/**
 * Sharepoint GetCardView response object
 */
export class GetCardViewResponse {
    /**
     * Initializes a new instance of the GetCardViewResponse class
     */
    public GetCardViewResponse(templateType: CardViewTemplateType){
        this.templateType = templateType;
    }

    /**
     * Sets templateType property of type CardViewTemplateType
     */
    public set templateType(templateType: CardViewTemplateType){
        this.templateType = templateType;
    }

    /**
     * Gets templateType property of type CardViewTemplateType
     */
    public get templateType(): CardViewTemplateType {
        return this.templateType;
    }

    /**
     * Sets aceData property of type AceData
     */
    public set aceData(aceData: AceData){
        this.aceData = aceData;
    }

    /**
     * Gets aceData property of type AceData
     */
    public get aceData(): AceData {
        return this.aceData;
    }

    /**
     * Sets data property of type CardViewData
     */
    public set data(data: CardViewData){
        this.data = data;
    }

    /**
     * Gets data property of type CardViewData
     */
    public get data(): CardViewData {
        return this.data;
    }
}