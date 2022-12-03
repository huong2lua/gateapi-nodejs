/**
 * Gate API v4
 * Welcome to Gate.io API  APIv4 provides spot, margin and futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user\'s behalf.
 *
 * Contact: support@mail.gate.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class SubAccountToSubAccount {
    /**
     * Transfer currency name
     */
    'currency': string;
    /**
     * Transfer from the account. (deprecate, use `sub_account_from_type` and `sub_account_to_type` instead)
     */
    'subAccountType'?: string;
    /**
     * Transfer from the user id of the sub-account
     */
    'subAccountFrom': string;
    /**
     * Transfer from the account.  `spot` - spot account, `futures` - perpetual contract account, `cross_margin` - cross margin account
     */
    'subAccountFromType': SubAccountToSubAccount.SubAccountFromType;
    /**
     * Transfer to the user id of the sub-account
     */
    'subAccountTo': string;
    /**
     * Transfer to the account.  `spot` - spot account, `futures` - perpetual contract account, `cross_margin` - cross margin account
     */
    'subAccountToType': SubAccountToSubAccount.SubAccountToType;
    /**
     * Transfer amount
     */
    'amount': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'currency',
            baseName: 'currency',
            type: 'string',
        },
        {
            name: 'subAccountType',
            baseName: 'sub_account_type',
            type: 'string',
        },
        {
            name: 'subAccountFrom',
            baseName: 'sub_account_from',
            type: 'string',
        },
        {
            name: 'subAccountFromType',
            baseName: 'sub_account_from_type',
            type: 'SubAccountToSubAccount.SubAccountFromType',
        },
        {
            name: 'subAccountTo',
            baseName: 'sub_account_to',
            type: 'string',
        },
        {
            name: 'subAccountToType',
            baseName: 'sub_account_to_type',
            type: 'SubAccountToSubAccount.SubAccountToType',
        },
        {
            name: 'amount',
            baseName: 'amount',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return SubAccountToSubAccount.attributeTypeMap;
    }
}

export namespace SubAccountToSubAccount {
    export enum SubAccountFromType {
        Spot = <any>'spot',
        Futures = <any>'futures',
        CrossMargin = <any>'cross_margin',
    }
    export enum SubAccountToType {
        Spot = <any>'spot',
        Futures = <any>'futures',
        CrossMargin = <any>'cross_margin',
    }
}
