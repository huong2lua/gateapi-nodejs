/**
 * Gate API v4
 * APIv4 provides spot, margin and futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user\'s behalf.
 *
 * Contact: support@mail.gate.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class Trade {
    /**
     * Trade ID
     */
    'id'?: string;
    /**
     * Trading time
     */
    'createTime'?: string;
    /**
     * Order side
     */
    'side'?: Trade.Side;
    /**
     * Trade role
     */
    'role'?: Trade.Role;
    /**
     * Trade amount
     */
    'amount'?: string;
    /**
     * Order price
     */
    'price'?: string;
    /**
     * Related order ID. No value in public endpoints
     */
    'orderId'?: string;
    /**
     * Fee deducted. No value in public endpoints
     */
    'fee'?: string;
    /**
     * Fee currency unit. No value in public endpoints
     */
    'feeCurrency'?: string;
    /**
     * Point used to deduct fee
     */
    'pointFee'?: string;
    /**
     * GT used to deduct fee
     */
    'gtFee'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: { name: string; baseName: string; type: string }[] = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'createTime',
            baseName: 'create_time',
            type: 'string',
        },
        {
            name: 'side',
            baseName: 'side',
            type: 'Trade.Side',
        },
        {
            name: 'role',
            baseName: 'role',
            type: 'Trade.Role',
        },
        {
            name: 'amount',
            baseName: 'amount',
            type: 'string',
        },
        {
            name: 'price',
            baseName: 'price',
            type: 'string',
        },
        {
            name: 'orderId',
            baseName: 'order_id',
            type: 'string',
        },
        {
            name: 'fee',
            baseName: 'fee',
            type: 'string',
        },
        {
            name: 'feeCurrency',
            baseName: 'fee_currency',
            type: 'string',
        },
        {
            name: 'pointFee',
            baseName: 'point_fee',
            type: 'string',
        },
        {
            name: 'gtFee',
            baseName: 'gt_fee',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return Trade.attributeTypeMap;
    }
}

export namespace Trade {
    export enum Side {
        Buy = <any>'buy',
        Sell = <any>'sell',
    }
    export enum Role {
        Taker = <any>'taker',
        Maker = <any>'maker',
    }
}
