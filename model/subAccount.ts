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

export class SubAccount {
    /**
     * custom text
     */
    'remark'?: string;
    /**
     * Sub-account login name: Only letters, numbers and underscores are supported, and cannot contain other illegal characters
     */
    'loginName': string;
    /**
     * The sub-account\'s password. (Default: the same as main account\'s password)
     */
    'password'?: string;
    /**
     * The sub-account\'s email address. (Default: the same as main account\'s email address)
     */
    'email'?: string;
    /**
     * State: 1-normal, 2-locked\"
     */
    'state'?: number;
    /**
     * The user id of the sub-account
     */
    'userId'?: number;
    /**
     * Created time
     */
    'createTime'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'remark',
            baseName: 'remark',
            type: 'string',
        },
        {
            name: 'loginName',
            baseName: 'login_name',
            type: 'string',
        },
        {
            name: 'password',
            baseName: 'password',
            type: 'string',
        },
        {
            name: 'email',
            baseName: 'email',
            type: 'string',
        },
        {
            name: 'state',
            baseName: 'state',
            type: 'number',
        },
        {
            name: 'userId',
            baseName: 'user_id',
            type: 'number',
        },
        {
            name: 'createTime',
            baseName: 'create_time',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return SubAccount.attributeTypeMap;
    }
}
