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

/* tslint:disable:no-unused-locals */
import { CurrencyChain } from '../model/currencyChain';
import { DepositAddress } from '../model/depositAddress';
import { LedgerRecord } from '../model/ledgerRecord';
import { SavedAddress } from '../model/savedAddress';
import { SubAccountBalance } from '../model/subAccountBalance';
import { SubAccountCrossMarginBalance } from '../model/subAccountCrossMarginBalance';
import { SubAccountFuturesBalance } from '../model/subAccountFuturesBalance';
import { SubAccountMarginBalance } from '../model/subAccountMarginBalance';
import { SubAccountToSubAccount } from '../model/subAccountToSubAccount';
import { SubAccountTransfer } from '../model/subAccountTransfer';
import { TotalBalance } from '../model/totalBalance';
import { TradeFee } from '../model/tradeFee';
import { TransactionID } from '../model/transactionID';
import { Transfer } from '../model/transfer';
import { WithdrawStatus } from '../model/withdrawStatus';
import { ObjectSerializer } from '../model/models';
import { ApiClient } from './apiClient';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export class WalletApi {
    protected client: ApiClient;

    constructor(client?: ApiClient) {
        if (client) {
            this.client = client;
        } else {
            this.client = new ApiClient();
        }
    }

    /**
     *
     * @summary List chains supported for specified currency
     * @param currency Currency name
     */
    public async listCurrencyChains(
        currency: string,
    ): Promise<{ response: AxiosResponse; body: Array<CurrencyChain> }> {
        const localVarPath = this.client.basePath + '/wallet/currency_chains';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'currency' is not null or undefined
        if (currency === null || currency === undefined) {
            throw new Error('Required parameter currency was null or undefined when calling listCurrencyChains.');
        }

        localVarQueryParameters['currency'] = ObjectSerializer.serialize(currency, 'string');

        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = [];
        return this.client.request<Array<CurrencyChain>>(config, 'Array<CurrencyChain>', authSettings);
    }

    /**
     *
     * @summary Generate currency deposit address
     * @param currency Currency name
     */
    public async getDepositAddress(currency: string): Promise<{ response: AxiosResponse; body: DepositAddress }> {
        const localVarPath = this.client.basePath + '/wallet/deposit_address';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'currency' is not null or undefined
        if (currency === null || currency === undefined) {
            throw new Error('Required parameter currency was null or undefined when calling getDepositAddress.');
        }

        localVarQueryParameters['currency'] = ObjectSerializer.serialize(currency, 'string');

        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<DepositAddress>(config, 'DepositAddress', authSettings);
    }

    /**
     * Record time range cannot exceed 30 days
     * @summary Retrieve withdrawal records
     * @param opts Optional parameters
     * @param opts.currency Filter by currency. Return all currency records if not specified
     * @param opts.from Time range beginning, default to 7 days before current time
     * @param opts.to Time range ending, default to current time
     * @param opts.limit Maximum number of records to be returned in a single list
     * @param opts.offset List offset, starting from 0
     */
    public async listWithdrawals(opts: {
        currency?: string;
        from?: number;
        to?: number;
        limit?: number;
        offset?: number;
    }): Promise<{ response: AxiosResponse; body: Array<LedgerRecord> }> {
        const localVarPath = this.client.basePath + '/wallet/withdrawals';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        opts = opts || {};
        if (opts.currency !== undefined) {
            localVarQueryParameters['currency'] = ObjectSerializer.serialize(opts.currency, 'string');
        }

        if (opts.from !== undefined) {
            localVarQueryParameters['from'] = ObjectSerializer.serialize(opts.from, 'number');
        }

        if (opts.to !== undefined) {
            localVarQueryParameters['to'] = ObjectSerializer.serialize(opts.to, 'number');
        }

        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }

        if (opts.offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(opts.offset, 'number');
        }

        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<LedgerRecord>>(config, 'Array<LedgerRecord>', authSettings);
    }

    /**
     * Record time range cannot exceed 30 days
     * @summary Retrieve deposit records
     * @param opts Optional parameters
     * @param opts.currency Filter by currency. Return all currency records if not specified
     * @param opts.from Time range beginning, default to 7 days before current time
     * @param opts.to Time range ending, default to current time
     * @param opts.limit Maximum number of records to be returned in a single list
     * @param opts.offset List offset, starting from 0
     */
    public async listDeposits(opts: {
        currency?: string;
        from?: number;
        to?: number;
        limit?: number;
        offset?: number;
    }): Promise<{ response: AxiosResponse; body: Array<LedgerRecord> }> {
        const localVarPath = this.client.basePath + '/wallet/deposits';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        opts = opts || {};
        if (opts.currency !== undefined) {
            localVarQueryParameters['currency'] = ObjectSerializer.serialize(opts.currency, 'string');
        }

        if (opts.from !== undefined) {
            localVarQueryParameters['from'] = ObjectSerializer.serialize(opts.from, 'number');
        }

        if (opts.to !== undefined) {
            localVarQueryParameters['to'] = ObjectSerializer.serialize(opts.to, 'number');
        }

        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }

        if (opts.offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(opts.offset, 'number');
        }

        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<LedgerRecord>>(config, 'Array<LedgerRecord>', authSettings);
    }

    /**
     * Transfer between different accounts. Currently support transfers between the following:  1. spot - margin 2. spot - futures(perpetual) 3. spot - delivery 4. spot - cross margin 5. spot - options
     * @summary Transfer between trading accounts
     * @param transfer
     */
    public async transfer(transfer: Transfer): Promise<{ response: AxiosResponse; body: TransactionID }> {
        const localVarPath = this.client.basePath + '/wallet/transfers';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'transfer' is not null or undefined
        if (transfer === null || transfer === undefined) {
            throw new Error('Required parameter transfer was null or undefined when calling transfer.');
        }

        const config: AxiosRequestConfig = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: ObjectSerializer.serialize(transfer, 'Transfer'),
        };

        const authSettings = ['apiv4'];
        return this.client.request<TransactionID>(config, 'TransactionID', authSettings);
    }

    /**
     * Record time range cannot exceed 30 days  > Note: only records after 2020-04-10 can be retrieved
     * @summary Retrieve transfer records between main and sub accounts
     * @param opts Optional parameters
     * @param opts.subUid User ID of sub-account, you can query multiple records separated by &#x60;,&#x60;. If not specified, it will return the records of all sub accounts
     * @param opts.from Time range beginning, default to 7 days before current time
     * @param opts.to Time range ending, default to current time
     * @param opts.limit Maximum number of records to be returned in a single list
     * @param opts.offset List offset, starting from 0
     */
    public async listSubAccountTransfers(opts: {
        subUid?: string;
        from?: number;
        to?: number;
        limit?: number;
        offset?: number;
    }): Promise<{ response: AxiosResponse; body: Array<SubAccountTransfer> }> {
        const localVarPath = this.client.basePath + '/wallet/sub_account_transfers';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        opts = opts || {};
        if (opts.subUid !== undefined) {
            localVarQueryParameters['sub_uid'] = ObjectSerializer.serialize(opts.subUid, 'string');
        }

        if (opts.from !== undefined) {
            localVarQueryParameters['from'] = ObjectSerializer.serialize(opts.from, 'number');
        }

        if (opts.to !== undefined) {
            localVarQueryParameters['to'] = ObjectSerializer.serialize(opts.to, 'number');
        }

        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }

        if (opts.offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(opts.offset, 'number');
        }

        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<SubAccountTransfer>>(config, 'Array<SubAccountTransfer>', authSettings);
    }

    /**
     * Support transferring with sub user\'s spot or futures account. Note that only main user\'s spot account is used no matter which sub user\'s account is operated.
     * @summary Transfer between main and sub accounts
     * @param subAccountTransfer
     */
    public async transferWithSubAccount(
        subAccountTransfer: SubAccountTransfer,
    ): Promise<{ response: AxiosResponse; body?: any }> {
        const localVarPath = this.client.basePath + '/wallet/sub_account_transfers';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);

        // verify required parameter 'subAccountTransfer' is not null or undefined
        if (subAccountTransfer === null || subAccountTransfer === undefined) {
            throw new Error(
                'Required parameter subAccountTransfer was null or undefined when calling transferWithSubAccount.',
            );
        }

        const config: AxiosRequestConfig = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: ObjectSerializer.serialize(subAccountTransfer, 'SubAccountTransfer'),
        };

        const authSettings = ['apiv4'];
        return this.client.request<any>(config, '', authSettings);
    }

    /**
     *
     * @summary Sub-account transfers to sub-account
     * @param subAccountToSubAccount
     */
    public async subAccountToSubAccount(
        subAccountToSubAccount: SubAccountToSubAccount,
    ): Promise<{ response: AxiosResponse; body?: any }> {
        const localVarPath = this.client.basePath + '/wallet/sub_account_to_sub_account';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);

        // verify required parameter 'subAccountToSubAccount' is not null or undefined
        if (subAccountToSubAccount === null || subAccountToSubAccount === undefined) {
            throw new Error(
                'Required parameter subAccountToSubAccount was null or undefined when calling subAccountToSubAccount.',
            );
        }

        const config: AxiosRequestConfig = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: ObjectSerializer.serialize(subAccountToSubAccount, 'SubAccountToSubAccount'),
        };

        const authSettings = ['apiv4'];
        return this.client.request<any>(config, '', authSettings);
    }

    /**
     *
     * @summary Retrieve withdrawal status
     * @param opts Optional parameters
     * @param opts.currency Retrieve data of the specified currency
     */
    public async listWithdrawStatus(opts: {
        currency?: string;
    }): Promise<{ response: AxiosResponse; body: Array<WithdrawStatus> }> {
        const localVarPath = this.client.basePath + '/wallet/withdraw_status';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        opts = opts || {};
        if (opts.currency !== undefined) {
            localVarQueryParameters['currency'] = ObjectSerializer.serialize(opts.currency, 'string');
        }

        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<WithdrawStatus>>(config, 'Array<WithdrawStatus>', authSettings);
    }

    /**
     *
     * @summary Retrieve sub account balances
     * @param opts Optional parameters
     * @param opts.subUid User ID of sub-account, you can query multiple records separated by &#x60;,&#x60;. If not specified, it will return the records of all sub accounts
     */
    public async listSubAccountBalances(opts: {
        subUid?: string;
    }): Promise<{ response: AxiosResponse; body: Array<SubAccountBalance> }> {
        const localVarPath = this.client.basePath + '/wallet/sub_account_balances';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        opts = opts || {};
        if (opts.subUid !== undefined) {
            localVarQueryParameters['sub_uid'] = ObjectSerializer.serialize(opts.subUid, 'string');
        }

        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<SubAccountBalance>>(config, 'Array<SubAccountBalance>', authSettings);
    }

    /**
     *
     * @summary Query sub accounts\' margin balances
     * @param opts Optional parameters
     * @param opts.subUid User ID of sub-account, you can query multiple records separated by &#x60;,&#x60;. If not specified, it will return the records of all sub accounts
     */
    public async listSubAccountMarginBalances(opts: {
        subUid?: string;
    }): Promise<{ response: AxiosResponse; body: Array<SubAccountMarginBalance> }> {
        const localVarPath = this.client.basePath + '/wallet/sub_account_margin_balances';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        opts = opts || {};
        if (opts.subUid !== undefined) {
            localVarQueryParameters['sub_uid'] = ObjectSerializer.serialize(opts.subUid, 'string');
        }

        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<SubAccountMarginBalance>>(
            config,
            'Array<SubAccountMarginBalance>',
            authSettings,
        );
    }

    /**
     *
     * @summary Query sub accounts\' futures account balances
     * @param opts Optional parameters
     * @param opts.subUid User ID of sub-account, you can query multiple records separated by &#x60;,&#x60;. If not specified, it will return the records of all sub accounts
     * @param opts.settle Query only balances of specified settle currency
     */
    public async listSubAccountFuturesBalances(opts: {
        subUid?: string;
        settle?: string;
    }): Promise<{ response: AxiosResponse; body: Array<SubAccountFuturesBalance> }> {
        const localVarPath = this.client.basePath + '/wallet/sub_account_futures_balances';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        opts = opts || {};
        if (opts.subUid !== undefined) {
            localVarQueryParameters['sub_uid'] = ObjectSerializer.serialize(opts.subUid, 'string');
        }

        if (opts.settle !== undefined) {
            localVarQueryParameters['settle'] = ObjectSerializer.serialize(opts.settle, 'string');
        }

        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<SubAccountFuturesBalance>>(
            config,
            'Array<SubAccountFuturesBalance>',
            authSettings,
        );
    }

    /**
     *
     * @summary Query subaccount\'s cross_margin account info
     * @param opts Optional parameters
     * @param opts.subUid User ID of sub-account, you can query multiple records separated by &#x60;,&#x60;. If not specified, it will return the records of all sub accounts
     */
    public async listSubAccountCrossMarginBalances(opts: {
        subUid?: string;
    }): Promise<{ response: AxiosResponse; body: Array<SubAccountCrossMarginBalance> }> {
        const localVarPath = this.client.basePath + '/wallet/sub_account_cross_margin_balances';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        opts = opts || {};
        if (opts.subUid !== undefined) {
            localVarQueryParameters['sub_uid'] = ObjectSerializer.serialize(opts.subUid, 'string');
        }

        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<SubAccountCrossMarginBalance>>(
            config,
            'Array<SubAccountCrossMarginBalance>',
            authSettings,
        );
    }

    /**
     *
     * @summary Query saved address
     * @param currency Currency
     * @param opts Optional parameters
     * @param opts.chain Chain name
     * @param opts.limit Maximum number returned, 100 at most
     */
    public async listSavedAddress(
        currency: string,
        opts: { chain?: string; limit?: string },
    ): Promise<{ response: AxiosResponse; body: Array<SavedAddress> }> {
        const localVarPath = this.client.basePath + '/wallet/saved_address';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'currency' is not null or undefined
        if (currency === null || currency === undefined) {
            throw new Error('Required parameter currency was null or undefined when calling listSavedAddress.');
        }

        opts = opts || {};
        localVarQueryParameters['currency'] = ObjectSerializer.serialize(currency, 'string');

        if (opts.chain !== undefined) {
            localVarQueryParameters['chain'] = ObjectSerializer.serialize(opts.chain, 'string');
        }

        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'string');
        }

        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<SavedAddress>>(config, 'Array<SavedAddress>', authSettings);
    }

    /**
     *
     * @summary Retrieve personal trading fee
     * @param opts Optional parameters
     * @param opts.currencyPair Specify a currency pair to retrieve precise fee rate  This field is optional. In most cases, the fee rate is identical among all currency pairs
     * @param opts.settle Specify the settlement currency of the contract to get more accurate rate settings  This field is optional. Generally, the rate settings for all settlement currencies are the same.
     */
    public async getTradeFee(opts: {
        currencyPair?: string;
        settle?: 'BTC' | 'USDT' | 'USD';
    }): Promise<{ response: AxiosResponse; body: TradeFee }> {
        const localVarPath = this.client.basePath + '/wallet/fee';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        opts = opts || {};
        if (opts.currencyPair !== undefined) {
            localVarQueryParameters['currency_pair'] = ObjectSerializer.serialize(opts.currencyPair, 'string');
        }

        if (opts.settle !== undefined) {
            localVarQueryParameters['settle'] = ObjectSerializer.serialize(opts.settle, "'BTC' | 'USDT' | 'USD'");
        }

        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<TradeFee>(config, 'TradeFee', authSettings);
    }

    /**
     * This endpoint returns an approximate sum of exchanged amount from all currencies to input currency for each account.The exchange rate and account balance could have been cached for at most 1 minute. It is not recommended to use its result for any trading calculation.  For trading calculation, use the corresponding account query endpoint for each account type. For example:   - `GET /spot/accounts` to query spot account balance - `GET /margin/accounts` to query margin account balance - `GET /futures/{settle}/accounts` to query futures account balance
     * @summary Retrieve user\'s total balances
     * @param opts Optional parameters
     * @param opts.currency Currency unit used to calculate the balance amount. BTC, CNY, USD and USDT are allowed. USDT is the default.
     */
    public async getTotalBalance(opts: {
        currency?: string;
    }): Promise<{ response: AxiosResponse; body: TotalBalance }> {
        const localVarPath = this.client.basePath + '/wallet/total_balance';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        opts = opts || {};
        if (opts.currency !== undefined) {
            localVarQueryParameters['currency'] = ObjectSerializer.serialize(opts.currency, 'string');
        }

        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<TotalBalance>(config, 'TotalBalance', authSettings);
    }
}
