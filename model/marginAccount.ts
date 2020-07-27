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

import { MarginAccountCurrency } from './marginAccountCurrency';

/**
 * Margin account detail. `base` refers to base currency, while `quotes to quote currency
 */
export class MarginAccount {
    /**
     * Currency pair
     */
    'currencyPair'?: string;
    'base'?: MarginAccountCurrency;
    'quote'?: MarginAccountCurrency;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: { name: string; baseName: string; type: string }[] = [
        {
            name: 'currencyPair',
            baseName: 'currency_pair',
            type: 'string',
        },
        {
            name: 'base',
            baseName: 'base',
            type: 'MarginAccountCurrency',
        },
        {
            name: 'quote',
            baseName: 'quote',
            type: 'MarginAccountCurrency',
        },
    ];

    static getAttributeTypeMap() {
        return MarginAccount.attributeTypeMap;
    }
}
