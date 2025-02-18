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

import { ApiV4KeyPerm } from './apiV4KeyPerm';

export class SubAccountKey {
    /**
     * User ID
     */
    'userId'?: string;
    /**
     * API key name
     */
    'name'?: string;
    'perms'?: Array<ApiV4KeyPerm>;
    /**
     * ip white list (list will be removed if no value is passed)
     */
    'ipWhitelist'?: Array<string>;
    /**
     * API Key
     */
    'key'?: string;
    /**
     * State 1 - normal 2 - locked 3 - frozen
     */
    'state'?: number;
    /**
     * Creation time
     */
    'createdAt'?: string;
    /**
     * Last update time
     */
    'updatedAt'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'userId',
            baseName: 'user_id',
            type: 'string',
        },
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'perms',
            baseName: 'perms',
            type: 'Array<ApiV4KeyPerm>',
        },
        {
            name: 'ipWhitelist',
            baseName: 'ip_whitelist',
            type: 'Array<string>',
        },
        {
            name: 'key',
            baseName: 'key',
            type: 'string',
        },
        {
            name: 'state',
            baseName: 'state',
            type: 'number',
        },
        {
            name: 'createdAt',
            baseName: 'created_at',
            type: 'string',
        },
        {
            name: 'updatedAt',
            baseName: 'updated_at',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return SubAccountKey.attributeTypeMap;
    }
}
