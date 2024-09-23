import 'should';
import { extend } from '../src/util';

describe('extend', () => {
  it('should extend an object with the properties of another object', () => {
    const defaultOptions = { a: 1, b: { c: 2 } };
    const options = { b: { d: 3 }, e: 4 };
    const result = extend(defaultOptions, options);

    result.should.deepEqual({
      a: 1,
      b: { c: 2, d: 3 },
      e: 4,
    });
  });

  it('should not modify the original objects', () => {
    const defaultOptions = { a: 1, b: { c: 2 } };
    const options = { b: { d: 3 }, e: 4 };
    const result = extend(defaultOptions, options);

    defaultOptions.should.deepEqual({ a: 1, b: { c: 2 } });
    options.should.deepEqual({ b: { d: 3 }, e: 4 });
    result.should.deepEqual({
      a: 1,
      b: { c: 2, d: 3 },
      e: 4,
    });
  });

  it('should handle undefined options', () => {
    const defaultOptions = { a: 1, b: { c: 2 } };
    const result = extend(defaultOptions, undefined);

    result.should.deepEqual({ a: 1, b: { c: 2 } });
  });

  it('should handle undefined defaultOptions', () => {
    const options = { b: { d: 3 }, e: 4 };
    const result = extend(undefined, options);

    result.should.deepEqual({ b: { d: 3 }, e: 4 });
  });

  it('should handle both undefined defaultOptions and options', () => {
    const result = extend(undefined, undefined);

    result.should.deepEqual({});
  });

  it('should not copy properties from prototype chain', () => {
    class DefaultOptions {
      a: number;
      constructor() {
        this.a = 1;
      }
    }
    (DefaultOptions.prototype as any).b = { c: 2 };

    const defaultOptions = new DefaultOptions();
    const options = { b: { d: 3 }, e: 4 };
    const result = extend(defaultOptions, options);

    result.should.deepEqual({
      a: 1,
      b: { d: 3 },
      e: 4,
    });
  });
});
