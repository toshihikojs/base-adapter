import createDebug from 'debug';
import { EventEmitter } from 'eventemitter3';
import * as util from './util';

const debug = createDebug('toshihiko:adapter:base');

export interface AdapterOptions {
  [key: string]: any;
}

function createNextTickErrorPromise(message: string): Promise<any> {
  return new Promise((_, reject) => {
    process.nextTick(() => {
      reject(new Error(message));
    });
  });
}

export class Adapter extends EventEmitter {
  options: AdapterOptions = {};

  constructor(options: AdapterOptions = {}) {
    super();

    Object.defineProperties(this, {
      options: {
        value: util.extend({}, options || {}),
        writable: true,
        configurable: false,
        enumerable: true,
      },
    });

    debug('created.', this);
  }

  async find(query: any, options: any = null): Promise<any> {
    options;
    return createNextTickErrorPromise("this adapter's find function is not implemented yet.");
  }

  async count(query: any): Promise<number> {
    query;
    return createNextTickErrorPromise("this adapter's count function is not implemented yet.");
  }

  async updateByQuery(query: any): Promise<any> {
    query;
    return createNextTickErrorPromise("this adapter's updateByQuery function is not implemented yet.");
  }

  async deleteByQuery(query: any): Promise<any> {
    query;
    return createNextTickErrorPromise("this adapter's deleteByQuery function is not implemented yet.");
  }

  async insert(model: any, conn: any, data: any): Promise<any> {
    data;
    return createNextTickErrorPromise("this adapter's insert function is not implemented yet.");
  }

  async update(model: any, conn: any, pk: any, data: any): Promise<any> {
    data;
    return createNextTickErrorPromise("this adapter's update function is not implemented yet.");
  }

  async execute(...args: any[]): Promise<any> {
    args;
    return createNextTickErrorPromise("this adapter's execute function is not implemented yet.");
  }

  getDBName(): string {
    return '';
  }

  async beginTransaction(): Promise<any> {
    return createNextTickErrorPromise("this adapter's beginTransaction function is not implemented yet.");
  }

  async commit(conn: any): Promise<any> {
    conn;
    return createNextTickErrorPromise("this adapter's commit function is not implemented yet.");
  }

  async rollback(conn: any): Promise<any> {
    conn;
    return createNextTickErrorPromise("this adapter's rollback function is not implemented yet.");
  }
}
