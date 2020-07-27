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

export class FuturesTicker {
    /**
     * Futures contract
     */
    'contract'?: string;
    /**
     * Last trading price
     */
    'last'?: string;
    /**
     * Change percentage.
     */
    'changePercentage'?: string;
    /**
     * Contract total size
     */
    'totalSize'?: string;
    /**
     * Lowest trading price in recent 24h
     */
    'low24h'?: string;
    /**
     * Highest trading price in recent 24h
     */
    'high24h'?: string;
    /**
     * Trade size in recent 24h
     */
    'volume24h'?: string;
    /**
     * Trade volumes in recent 24h in BTC(deprecated, use `volume_24h_base`, `volume_24h_quote`, `volume_24h_settle` instead)
     */
    'volume24hBtc'?: string;
    /**
     * Trade volumes in recent 24h in USD(deprecated, use `volume_24h_base`, `volume_24h_quote`, `volume_24h_settle` instead)
     */
    'volume24hUsd'?: string;
    /**
     * Trade volume in recent 24h, in base currency
     */
    'volume24hBase'?: string;
    /**
     * Trade volume in recent 24h, in quote currency
     */
    'volume24hQuote'?: string;
    /**
     * Trade volume in recent 24h, in settle currency
     */
    'volume24hSettle'?: string;
    /**
     * Recent mark price
     */
    'markPrice'?: string;
    /**
     * Funding rate
     */
    'fundingRate'?: string;
    /**
     * Indicative Funding rate in next period
     */
    'fundingRateIndicative'?: string;
    /**
     * Index price
     */
    'indexPrice'?: string;
    /**
     * Exchange rate of base currency and settlement currency in Quanto contract. Not existed in contract of other types
     */
    'quantoBaseRate'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: { name: string; baseName: string; type: string }[] = [
        {
            name: 'contract',
            baseName: 'contract',
            type: 'string',
        },
        {
            name: 'last',
            baseName: 'last',
            type: 'string',
        },
        {
            name: 'changePercentage',
            baseName: 'change_percentage',
            type: 'string',
        },
        {
            name: 'totalSize',
            baseName: 'total_size',
            type: 'string',
        },
        {
            name: 'low24h',
            baseName: 'low_24h',
            type: 'string',
        },
        {
            name: 'high24h',
            baseName: 'high_24h',
            type: 'string',
        },
        {
            name: 'volume24h',
            baseName: 'volume_24h',
            type: 'string',
        },
        {
            name: 'volume24hBtc',
            baseName: 'volume_24h_btc',
            type: 'string',
        },
        {
            name: 'volume24hUsd',
            baseName: 'volume_24h_usd',
            type: 'string',
        },
        {
            name: 'volume24hBase',
            baseName: 'volume_24h_base',
            type: 'string',
        },
        {
            name: 'volume24hQuote',
            baseName: 'volume_24h_quote',
            type: 'string',
        },
        {
            name: 'volume24hSettle',
            baseName: 'volume_24h_settle',
            type: 'string',
        },
        {
            name: 'markPrice',
            baseName: 'mark_price',
            type: 'string',
        },
        {
            name: 'fundingRate',
            baseName: 'funding_rate',
            type: 'string',
        },
        {
            name: 'fundingRateIndicative',
            baseName: 'funding_rate_indicative',
            type: 'string',
        },
        {
            name: 'indexPrice',
            baseName: 'index_price',
            type: 'string',
        },
        {
            name: 'quantoBaseRate',
            baseName: 'quanto_base_rate',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return FuturesTicker.attributeTypeMap;
    }
}
