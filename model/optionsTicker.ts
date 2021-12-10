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

/**
 * Options contract detail
 */
export class OptionsTicker {
    /**
     * Options contract name
     */
    'name'?: string;
    /**
     * Last trading price
     */
    'lastPrice'?: string;
    /**
     * Current mark price
     */
    'markPrice'?: string;
    /**
     * Current index price
     */
    'indexPrice'?: string;
    /**
     * Best ask size
     */
    'ask1Size'?: number;
    /**
     * Best ask price
     */
    'ask1Price'?: string;
    /**
     * Best bid size
     */
    'bid1Size'?: number;
    /**
     * Best bid price
     */
    'bid1Price'?: string;
    /**
     * Current total long position size
     */
    'positionSize'?: number;
    /**
     * Implied volatility
     */
    'markIv'?: string;
    /**
     * Bid side implied volatility
     */
    'bidIv'?: string;
    /**
     * Ask side implied volatility
     */
    'askIv'?: string;
    /**
     * Current leverage. Formula: underlying_price / mark_price * delta
     */
    'leverage'?: string;
    /**
     * Delta
     */
    'delta'?: string;
    /**
     * Gamma
     */
    'gamma'?: string;
    /**
     * Vega
     */
    'vega'?: string;
    /**
     * Theta
     */
    'theta'?: string;
    /**
     * Rho
     */
    'rho'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'lastPrice',
            baseName: 'last_price',
            type: 'string',
        },
        {
            name: 'markPrice',
            baseName: 'mark_price',
            type: 'string',
        },
        {
            name: 'indexPrice',
            baseName: 'index_price',
            type: 'string',
        },
        {
            name: 'ask1Size',
            baseName: 'ask1_size',
            type: 'number',
        },
        {
            name: 'ask1Price',
            baseName: 'ask1_price',
            type: 'string',
        },
        {
            name: 'bid1Size',
            baseName: 'bid1_size',
            type: 'number',
        },
        {
            name: 'bid1Price',
            baseName: 'bid1_price',
            type: 'string',
        },
        {
            name: 'positionSize',
            baseName: 'position_size',
            type: 'number',
        },
        {
            name: 'markIv',
            baseName: 'mark_iv',
            type: 'string',
        },
        {
            name: 'bidIv',
            baseName: 'bid_iv',
            type: 'string',
        },
        {
            name: 'askIv',
            baseName: 'ask_iv',
            type: 'string',
        },
        {
            name: 'leverage',
            baseName: 'leverage',
            type: 'string',
        },
        {
            name: 'delta',
            baseName: 'delta',
            type: 'string',
        },
        {
            name: 'gamma',
            baseName: 'gamma',
            type: 'string',
        },
        {
            name: 'vega',
            baseName: 'vega',
            type: 'string',
        },
        {
            name: 'theta',
            baseName: 'theta',
            type: 'string',
        },
        {
            name: 'rho',
            baseName: 'rho',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return OptionsTicker.attributeTypeMap;
    }
}
