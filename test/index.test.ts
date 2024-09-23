import 'should';
import { Adapter, AdapterOptions } from '../src/index';

describe('Adapter', () => {
  let adapter: Adapter;

  beforeEach(() => {
    const options: AdapterOptions = { key: 'value' };
    adapter = new Adapter(options);
  });

  it('should create an instance of Adapter', () => {
    adapter.should.be.instanceOf(Adapter);
  });

  it('should create an instance of Adapter with default options', () => {
    adapter = new Adapter();
    adapter.should.be.instanceOf(Adapter);
    adapter.options.should.deepEqual({});
  });

  it('should create an instance of Adapter with null options', () => {
    adapter = new Adapter(null as any);
    adapter.should.be.instanceOf(Adapter);
    adapter.options.should.deepEqual({});
  });

  it('should have an options property', () => {
    adapter.should.have.property('options');
  });

  it('should reject find method with not implemented error', async () => {
    try {
      await adapter.find({}, {});
    } catch (err: any) {
      err.should.be.instanceOf(Error);
      err.message.should.equal("this adapter's find function is not implemented yet.");
    }
  });

  it('should reject find method with not implemented error and default options', async () => {
    try {
      await adapter.find({});
    } catch (err: any) {
      err.should.be.instanceOf(Error);
      err.message.should.equal("this adapter's find function is not implemented yet.");
    }
  });

  it('should reject count method with not implemented error', async () => {
    try {
      await adapter.count({});
    } catch (err: any) {
      err.should.be.instanceOf(Error);
      err.message.should.equal("this adapter's count function is not implemented yet.");
    }
  });

  it('should reject updateByQuery method with not implemented error', async () => {
    try {
      await adapter.updateByQuery({});
    } catch (err: any) {
      err.should.be.instanceOf(Error);
      err.message.should.equal("this adapter's updateByQuery function is not implemented yet.");
    }
  });

  it('should reject deleteByQuery method with not implemented error', async () => {
    try {
      await adapter.deleteByQuery({});
    } catch (err: any) {
      err.should.be.instanceOf(Error);
      err.message.should.equal("this adapter's deleteByQuery function is not implemented yet.");
    }
  });

  it('should reject insert method with not implemented error', async () => {
    try {
      await adapter.insert({}, {}, {});
    } catch (err: any) {
      err.should.be.instanceOf(Error);
      err.message.should.equal("this adapter's insert function is not implemented yet.");
    }
  });

  it('should reject update method with not implemented error', async () => {
    try {
      await adapter.update({}, {}, {}, {});
    } catch (err: any) {
      err.should.be.instanceOf(Error);
      err.message.should.equal("this adapter's update function is not implemented yet.");
    }
  });

  it('should reject execute method with not implemented error', async () => {
    try {
      await adapter.execute();
    } catch (err: any) {
      err.should.be.instanceOf(Error);
      err.message.should.equal("this adapter's execute function is not implemented yet.");
    }
  });

  it('should return empty string for getDBName method', () => {
    const dbName = adapter.getDBName();
    dbName.should.equal('');
  });

  it('should reject beginTransaction method with not implemented error', async () => {
    try {
      await adapter.beginTransaction();
    } catch (err: any) {
      err.should.be.instanceOf(Error);
      err.message.should.equal("this adapter's beginTransaction function is not implemented yet.");
    }
  });

  it('should reject commit method with not implemented error', async () => {
    try {
      await adapter.commit({});
    } catch (err: any) {
      err.should.be.instanceOf(Error);
      err.message.should.equal("this adapter's commit function is not implemented yet.");
    }
  });

  it('should reject rollback method with not implemented error', async () => {
    try {
      await adapter.rollback({});
    } catch (err: any) {
      err.should.be.instanceOf(Error);
      err.message.should.equal("this adapter's rollback function is not implemented yet.");
    }
  });
});
