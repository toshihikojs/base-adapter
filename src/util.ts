import * as _ from 'lodash';

/**
 * Extends an object with the properties of another object.
 * @param {Record<string, any> | undefined} defaultOptions The default object with default properties.
 * @param {Record<string, any> | undefined} options The object to extend with.
 * @return {Record<string, any>} The extended object.
 */
export function extend(
  defaultOptions: Record<string, any> | undefined,
  options: Record<string, any> | undefined,
): Record<string, any> {
  defaultOptions = defaultOptions || {};
  const obj = _.cloneDeep(options) || {};

  for (const key in defaultOptions) {
    if (!defaultOptions.hasOwnProperty(key)) continue;

    if (obj[key] === undefined) {
      obj[key] = _.cloneDeep(defaultOptions[key]);
      continue;
    }

    if (typeof defaultOptions[key] === 'object' && typeof obj[key] === 'object') {
      obj[key] = extend(obj[key], defaultOptions[key]);
      continue;
    }
  }

  return obj;
}
