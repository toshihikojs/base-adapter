import createDebug from 'debug';
import { EventEmitter } from 'eventemitter3';
import * as util from './util';

const debug = createDebug('toshihiko:adapter:base');

function createNextTickErrorPromise(message: string): Promise<any> {
  return new Promise((_, reject) => {
    process.nextTick(() => {
      reject(new Error(message));
    });
  });
}

export class Adapter<AdapterOptions extends {}> extends EventEmitter {
  options!: AdapterOptions;

  constructor(options: AdapterOptions) {
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async find(query: any, options: any = null): Promise<any> {
    return createNextTickErrorPromise("this adapter's find function is not implemented yet.");
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async count(query: any): Promise<number> {
    return createNextTickErrorPromise("this adapter's count function is not implemented yet.");
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async updateByQuery(query: any): Promise<any> {
    return createNextTickErrorPromise("this adapter's updateByQuery function is not implemented yet.");
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async deleteByQuery(query: any): Promise<any> {
    return createNextTickErrorPromise("this adapter's deleteByQuery function is not implemented yet.");
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async insert(model: any, conn: any, data: any): Promise<any> {
    return createNextTickErrorPromise("this adapter's insert function is not implemented yet.");
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(model: any, conn: any, pk: any, data: any): Promise<any> {
    return createNextTickErrorPromise("this adapter's update function is not implemented yet.");
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async execute(...args: any[]): Promise<any> {
    return createNextTickErrorPromise("this adapter's execute function is not implemented yet.");
  }

  getDBName(): string {
    return '';
  }

  async beginTransaction(): Promise<any> {
    return createNextTickErrorPromise("this adapter's beginTransaction function is not implemented yet.");
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async commit(conn: any): Promise<any> {
    return createNextTickErrorPromise("this adapter's commit function is not implemented yet.");
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async rollback(conn: any): Promise<any> {
    return createNextTickErrorPromise("this adapter's rollback function is not implemented yet.");
  }
}

export { extend } from './util';
