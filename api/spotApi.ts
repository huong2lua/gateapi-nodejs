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

import localVarRequest = require('request');
import http = require('http');

/* tslint:disable:no-unused-locals */
import { BatchOrder } from '../model/batchOrder';
import { CancelOrder } from '../model/cancelOrder';
import { CancelOrderResult } from '../model/cancelOrderResult';
import { CurrencyPair } from '../model/currencyPair';
import { Order } from '../model/order';
import { OrderBook } from '../model/orderBook';
import { SpotAccount } from '../model/spotAccount';
import { Ticker } from '../model/ticker';
import { Trade } from '../model/trade';
import { ObjectSerializer } from '../model/models';
import { ApiClient } from './apiClient';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export class SpotApi {
    protected client: ApiClient;

    constructor(client?: ApiClient) {
        if (client) {
            this.client = client;
        } else {
            this.client = new ApiClient();
        }
    }

    /**
     * Multiple currency pairs can be specified, but maximum 20 orders are allowed per request
     * @summary Cancel a batch of orders with an ID list
     * @param cancelOrder
     */
    public async cancelBatchOrders(
        cancelOrder: CancelOrder[],
    ): Promise<{ response: http.IncomingMessage; body: CancelOrderResult[] }> {
        const localVarPath = this.client.basePath + '/spot/cancel_batch_orders';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const localVarFormParams: any = {};

        // verify required parameter 'cancelOrder' is not null or undefined
        if (cancelOrder === null || cancelOrder === undefined) {
            throw new Error('Required parameter cancelOrder was null or undefined when calling cancelBatchOrders.');
        }

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: true,
            json: true,
            body: ObjectSerializer.serialize(cancelOrder, 'Array<CancelOrder>'),
        };
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }

        const authSettings = ['apiv4'];
        return this.client.request<CancelOrderResult[]>(
            localVarRequestOptions,
            'Array<CancelOrderResult>',
            authSettings,
        );
    }

    /**
     *
     * @summary Cancel a single order
     * @param orderId ID returned on order successfully being created
     * @param currencyPair Currency pair
     */
    public async cancelOrder(
        orderId: string,
        currencyPair: string,
    ): Promise<{ response: http.IncomingMessage; body: Order }> {
        const localVarPath =
            this.client.basePath +
            '/spot/orders/{order_id}'.replace('{' + 'order_id' + '}', encodeURIComponent(String(orderId)));
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const localVarFormParams: any = {};

        // verify required parameter 'orderId' is not null or undefined
        if (orderId === null || orderId === undefined) {
            throw new Error('Required parameter orderId was null or undefined when calling cancelOrder.');
        }

        // verify required parameter 'currencyPair' is not null or undefined
        if (currencyPair === null || currencyPair === undefined) {
            throw new Error('Required parameter currencyPair was null or undefined when calling cancelOrder.');
        }

        localVarQueryParameters.currency_pair = ObjectSerializer.serialize(currencyPair, 'string');

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: true,
            json: true,
        };
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }

        const authSettings = ['apiv4'];
        return this.client.request<Order>(localVarRequestOptions, 'Order', authSettings);
    }

    /**
     *
     * @summary Cancel all `open` orders in specified currency pair
     * @param currencyPair Currency pair
     * @param side All bids or asks. Both included in not specified
     * @param account Specify account type. Default to all account types being included
     */
    public async cancelOrders(
        currencyPair: string,
        side?: 'buy' | 'sell',
        account?: 'spot' | 'margin',
    ): Promise<{ response: http.IncomingMessage; body: Order[] }> {
        const localVarPath = this.client.basePath + '/spot/orders';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const localVarFormParams: any = {};

        // verify required parameter 'currencyPair' is not null or undefined
        if (currencyPair === null || currencyPair === undefined) {
            throw new Error('Required parameter currencyPair was null or undefined when calling cancelOrders.');
        }

        localVarQueryParameters.currency_pair = ObjectSerializer.serialize(currencyPair, 'string');

        if (side !== undefined) {
            localVarQueryParameters.side = ObjectSerializer.serialize(side, "'buy' | 'sell'");
        }

        if (account !== undefined) {
            localVarQueryParameters.account = ObjectSerializer.serialize(account, "'spot' | 'margin'");
        }

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: true,
            json: true,
        };
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }

        const authSettings = ['apiv4'];
        return this.client.request<Order[]>(localVarRequestOptions, 'Array<Order>', authSettings);
    }

    /**
     * Batch orders requirements:  1. custom order field `text` is required 2. At most 4 currency pairs, maximum 5 orders each, are allowed in one request 3. No mixture of spot orders and margin orders, i.e. `account` must be identical for all orders
     * @summary Create a batch of orders
     * @param order
     */
    public async createBatchOrders(order: Order[]): Promise<{ response: http.IncomingMessage; body: BatchOrder[] }> {
        const localVarPath = this.client.basePath + '/spot/batch_orders';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const localVarFormParams: any = {};

        // verify required parameter 'order' is not null or undefined
        if (order === null || order === undefined) {
            throw new Error('Required parameter order was null or undefined when calling createBatchOrders.');
        }

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: true,
            json: true,
            body: ObjectSerializer.serialize(order, 'Array<Order>'),
        };
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }

        const authSettings = ['apiv4'];
        return this.client.request<BatchOrder[]>(localVarRequestOptions, 'Array<BatchOrder>', authSettings);
    }

    /**
     *
     * @summary Create an order
     * @param order
     */
    public async createOrder(order: Order): Promise<{ response: http.IncomingMessage; body: Order }> {
        const localVarPath = this.client.basePath + '/spot/orders';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const localVarFormParams: any = {};

        // verify required parameter 'order' is not null or undefined
        if (order === null || order === undefined) {
            throw new Error('Required parameter order was null or undefined when calling createOrder.');
        }

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: true,
            json: true,
            body: ObjectSerializer.serialize(order, 'Order'),
        };
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }

        const authSettings = ['apiv4'];
        return this.client.request<Order>(localVarRequestOptions, 'Order', authSettings);
    }

    /**
     *
     * @summary Get detail of one single order
     * @param currencyPair Currency pair
     */
    public async getCurrencyPair(
        currencyPair: string,
    ): Promise<{ response: http.IncomingMessage; body: CurrencyPair }> {
        const localVarPath =
            this.client.basePath +
            '/spot/currency_pairs/{currency_pair}'.replace(
                '{' + 'currency_pair' + '}',
                encodeURIComponent(String(currencyPair)),
            );
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const localVarFormParams: any = {};

        // verify required parameter 'currencyPair' is not null or undefined
        if (currencyPair === null || currencyPair === undefined) {
            throw new Error('Required parameter currencyPair was null or undefined when calling getCurrencyPair.');
        }

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: true,
            json: true,
        };
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }

        const authSettings = [];
        return this.client.request<CurrencyPair>(localVarRequestOptions, 'CurrencyPair', authSettings);
    }

    /**
     *
     * @summary Get a single order
     * @param orderId ID returned on order successfully being created
     * @param currencyPair Currency pair
     */
    public async getOrder(
        orderId: string,
        currencyPair: string,
    ): Promise<{ response: http.IncomingMessage; body: Order }> {
        const localVarPath =
            this.client.basePath +
            '/spot/orders/{order_id}'.replace('{' + 'order_id' + '}', encodeURIComponent(String(orderId)));
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const localVarFormParams: any = {};

        // verify required parameter 'orderId' is not null or undefined
        if (orderId === null || orderId === undefined) {
            throw new Error('Required parameter orderId was null or undefined when calling getOrder.');
        }

        // verify required parameter 'currencyPair' is not null or undefined
        if (currencyPair === null || currencyPair === undefined) {
            throw new Error('Required parameter currencyPair was null or undefined when calling getOrder.');
        }

        localVarQueryParameters.currency_pair = ObjectSerializer.serialize(currencyPair, 'string');

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: true,
            json: true,
        };
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }

        const authSettings = ['apiv4'];
        return this.client.request<Order>(localVarRequestOptions, 'Order', authSettings);
    }

    /**
     * Maximum of 1000 points are returned in one query. Be sure not to exceed the limit when specifying `from`, `to` and `interval`
     * @summary Market candlesticks
     * @param currencyPair Currency pair
     * @param limit Maximum recent data points returned. &#x60;limit&#x60; is conflicted with &#x60;from&#x60; and &#x60;to&#x60;. If either &#x60;from&#x60; or &#x60;to&#x60; is specified, request will be rejected.
     * @param from Start time of candlesticks, formatted in Unix timestamp in seconds. Default to&#x60;to - 100 * interval&#x60; if not specified
     * @param to End time of candlesticks, formatted in Unix timestamp in seconds. Default to current time
     * @param interval Interval time between data points
     */
    public async listCandlesticks(
        currencyPair: string,
        limit?: number,
        from?: number,
        to?: number,
        interval?: '10s' | '1m' | '5m' | '15m' | '30m' | '1h' | '4h' | '8h' | '1d' | '7d',
    ): Promise<{ response: http.IncomingMessage; body: string[][] }> {
        const localVarPath = this.client.basePath + '/spot/candlesticks';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const localVarFormParams: any = {};

        // verify required parameter 'currencyPair' is not null or undefined
        if (currencyPair === null || currencyPair === undefined) {
            throw new Error('Required parameter currencyPair was null or undefined when calling listCandlesticks.');
        }

        localVarQueryParameters.currency_pair = ObjectSerializer.serialize(currencyPair, 'string');

        if (limit !== undefined) {
            localVarQueryParameters.limit = ObjectSerializer.serialize(limit, 'number');
        }

        if (from !== undefined) {
            localVarQueryParameters.from = ObjectSerializer.serialize(from, 'number');
        }

        if (to !== undefined) {
            localVarQueryParameters.to = ObjectSerializer.serialize(to, 'number');
        }

        if (interval !== undefined) {
            localVarQueryParameters.interval = ObjectSerializer.serialize(
                interval,
                "'10s' | '1m' | '5m' | '15m' | '30m' | '1h' | '4h' | '8h' | '1d' | '7d'",
            );
        }

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: true,
            json: true,
        };
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }

        const authSettings = [];
        return this.client.request<string[][]>(localVarRequestOptions, 'Array<Array<string>>', authSettings);
    }

    /**
     *
     * @summary List all currency pairs supported
     */
    public async listCurrencyPairs(): Promise<{ response: http.IncomingMessage; body: CurrencyPair[] }> {
        const localVarPath = this.client.basePath + '/spot/currency_pairs';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const localVarFormParams: any = {};

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: true,
            json: true,
        };
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }

        const authSettings = [];
        return this.client.request<CurrencyPair[]>(localVarRequestOptions, 'Array<CurrencyPair>', authSettings);
    }

    /**
     *
     * @summary List personal trading history
     * @param currencyPair Currency pair
     * @param limit Maximum number of records returned in one list
     * @param page Page number
     * @param orderId List all trades of specified order
     */
    public async listMyTrades(
        currencyPair: string,
        limit?: number,
        page?: number,
        orderId?: string,
    ): Promise<{ response: http.IncomingMessage; body: Trade[] }> {
        const localVarPath = this.client.basePath + '/spot/my_trades';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const localVarFormParams: any = {};

        // verify required parameter 'currencyPair' is not null or undefined
        if (currencyPair === null || currencyPair === undefined) {
            throw new Error('Required parameter currencyPair was null or undefined when calling listMyTrades.');
        }

        localVarQueryParameters.currency_pair = ObjectSerializer.serialize(currencyPair, 'string');

        if (limit !== undefined) {
            localVarQueryParameters.limit = ObjectSerializer.serialize(limit, 'number');
        }

        if (page !== undefined) {
            localVarQueryParameters.page = ObjectSerializer.serialize(page, 'number');
        }

        if (orderId !== undefined) {
            localVarQueryParameters.order_id = ObjectSerializer.serialize(orderId, 'string');
        }

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: true,
            json: true,
        };
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }

        const authSettings = ['apiv4'];
        return this.client.request<Trade[]>(localVarRequestOptions, 'Array<Trade>', authSettings);
    }

    /**
     * Order book will be sorted by price from high to low on bids; reversed on asks
     * @summary Retrieve order book
     * @param currencyPair Currency pair
     * @param interval Order depth. 0 means no aggregation is applied. default to 0
     * @param limit Maximum number of order depth data in asks or bids
     */
    public async listOrderBook(
        currencyPair: string,
        interval?: string,
        limit?: number,
    ): Promise<{ response: http.IncomingMessage; body: OrderBook }> {
        const localVarPath = this.client.basePath + '/spot/order_book';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const localVarFormParams: any = {};

        // verify required parameter 'currencyPair' is not null or undefined
        if (currencyPair === null || currencyPair === undefined) {
            throw new Error('Required parameter currencyPair was null or undefined when calling listOrderBook.');
        }

        localVarQueryParameters.currency_pair = ObjectSerializer.serialize(currencyPair, 'string');

        if (interval !== undefined) {
            localVarQueryParameters.interval = ObjectSerializer.serialize(interval, 'string');
        }

        if (limit !== undefined) {
            localVarQueryParameters.limit = ObjectSerializer.serialize(limit, 'number');
        }

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: true,
            json: true,
        };
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }

        const authSettings = [];
        return this.client.request<OrderBook>(localVarRequestOptions, 'OrderBook', authSettings);
    }

    /**
     *
     * @summary List orders
     * @param currencyPair Currency pair
     * @param status List orders based on status  &#x60;open&#x60; - order is waiting to be filled &#x60;finished&#x60; - order has been filled or cancelled
     * @param page Page number
     * @param limit Maximum number of records returned in one list
     */
    public async listOrders(
        currencyPair: string,
        status: 'open' | 'finished',
        page?: number,
        limit?: number,
    ): Promise<{ response: http.IncomingMessage; body: Order[] }> {
        const localVarPath = this.client.basePath + '/spot/orders';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const localVarFormParams: any = {};

        // verify required parameter 'currencyPair' is not null or undefined
        if (currencyPair === null || currencyPair === undefined) {
            throw new Error('Required parameter currencyPair was null or undefined when calling listOrders.');
        }

        // verify required parameter 'status' is not null or undefined
        if (status === null || status === undefined) {
            throw new Error('Required parameter status was null or undefined when calling listOrders.');
        }

        localVarQueryParameters.currency_pair = ObjectSerializer.serialize(currencyPair, 'string');

        localVarQueryParameters.status = ObjectSerializer.serialize(status, "'open' | 'finished'");

        if (page !== undefined) {
            localVarQueryParameters.page = ObjectSerializer.serialize(page, 'number');
        }

        if (limit !== undefined) {
            localVarQueryParameters.limit = ObjectSerializer.serialize(limit, 'number');
        }

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: true,
            json: true,
        };
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }

        const authSettings = ['apiv4'];
        return this.client.request<Order[]>(localVarRequestOptions, 'Array<Order>', authSettings);
    }

    /**
     *
     * @summary List spot accounts
     * @param currency Retrieved specified currency related data
     */
    public async listSpotAccounts(currency?: string): Promise<{ response: http.IncomingMessage; body: SpotAccount[] }> {
        const localVarPath = this.client.basePath + '/spot/accounts';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const localVarFormParams: any = {};

        if (currency !== undefined) {
            localVarQueryParameters.currency = ObjectSerializer.serialize(currency, 'string');
        }

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: true,
            json: true,
        };
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }

        const authSettings = ['apiv4'];
        return this.client.request<SpotAccount[]>(localVarRequestOptions, 'Array<SpotAccount>', authSettings);
    }

    /**
     * Return only related data if `currency_pair` is specified; otherwise return all of them
     * @summary Retrieve ticker information
     * @param currencyPair Currency pair
     */
    public async listTickers(currencyPair?: string): Promise<{ response: http.IncomingMessage; body: Ticker[] }> {
        const localVarPath = this.client.basePath + '/spot/tickers';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const localVarFormParams: any = {};

        if (currencyPair !== undefined) {
            localVarQueryParameters.currency_pair = ObjectSerializer.serialize(currencyPair, 'string');
        }

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: true,
            json: true,
        };
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }

        const authSettings = [];
        return this.client.request<Ticker[]>(localVarRequestOptions, 'Array<Ticker>', authSettings);
    }

    /**
     *
     * @summary Retrieve market trades
     * @param currencyPair Currency pair
     * @param limit Maximum number of records returned in one list
     * @param lastId Specify list staring point using the &#x60;id&#x60; of last record in previous list-query results
     */
    public async listTrades(
        currencyPair: string,
        limit?: number,
        lastId?: string,
    ): Promise<{ response: http.IncomingMessage; body: Trade[] }> {
        const localVarPath = this.client.basePath + '/spot/trades';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const localVarFormParams: any = {};

        // verify required parameter 'currencyPair' is not null or undefined
        if (currencyPair === null || currencyPair === undefined) {
            throw new Error('Required parameter currencyPair was null or undefined when calling listTrades.');
        }

        localVarQueryParameters.currency_pair = ObjectSerializer.serialize(currencyPair, 'string');

        if (limit !== undefined) {
            localVarQueryParameters.limit = ObjectSerializer.serialize(limit, 'number');
        }

        if (lastId !== undefined) {
            localVarQueryParameters.last_id = ObjectSerializer.serialize(lastId, 'string');
        }

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: true,
            json: true,
        };
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }

        const authSettings = [];
        return this.client.request<Trade[]>(localVarRequestOptions, 'Array<Trade>', authSettings);
    }
}
