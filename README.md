# Toshihiko Base Adapter

[![Build Status](https://github.com/toshihikojs/base-adapter/actions/workflows/node.js.yml/badge.svg)](https://github.com/toshihikojs/base-adapter/actions)
[![Coverage Status](https://coveralls.io/repos/github/toshihikojs/base-adapter/badge.svg?branch=master)](https://coveralls.io/github/toshihikojs/base-adapter?branch=master)

Toshihiko Base Adapter is a TypeScript library for extending object properties and providing basic database adapter functionalities.

## Installation

Install the package using npm:

```bash
npm install --save @toshihiko/base-adapter
```

## Usage

### Extending Object Properties

The `extend` function is used to extend the properties of an object.

```typescript
import { extend } from '@toshihiko/base-adapter';

const defaultOptions = { a: 1, b: { c: 2 } };
const options = { b: { d: 3 }, e: 4 };
const result = extend(defaultOptions, options);

console.log(result);
// Output: { a: 1, b: { c: 2, d: 3 }, e: 4 }
```

### Database Adapter

The `Adapter` class provides basic database adapter functionalities.

```typescript
import { Adapter, AdapterOptions } from '@toshihiko/base-adapter';

const parent = {};
const options: AdapterOptions = { key: 'value' };
const adapter = new Adapter(parent, options);

adapter.find({}, {}).catch(err => console.error(err.message));
// Output: this adapter's find function is not implemented yet.
```

## Contributing

Feel free to submit issues and pull requests to improve this project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
