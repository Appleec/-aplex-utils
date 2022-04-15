'use strict';

/**
 * parseURL
 *
 * @static
 * @since 1.0.0
 * @category Lang
 * @param {string} ourl The value to process.
 * @returns {object} Returns the number.
 * @example
 *
 * _.parseURL(3.2);
 * // => 3.2
 *
 */
function parseURL(ourl) {
  if (!ourl) {
    return {};
  }

  const url = ourl.toString();
  const a = document.createElement('a');
  a.href = url;
  const ret = {
    source: url,
    protocol: a.protocol.replace(':', ''),
    host: a.hostname,
    origin: a.origin,
    port: a.port,
    query: a.search,
    // eslint-disable-next-line no-useless-escape,no-sparse-arrays
    file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
    hash: a.hash.replace('#', ''),
    // eslint-disable-next-line no-useless-escape
    path: a.pathname.replace(/^([^\/])/, '/$1'),
    // eslint-disable-next-line no-useless-escape,no-sparse-arrays
    relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
    segments: a.pathname.replace(/^\//, '').split('/'),
    params: (function () {
      const ret = {};
      const seg = a.search.replace(/^\?/, '').split('&').filter(function (v, i) {
        if (v !== '' && v.indexOf('=')) {
          return true;
        }
      });
      seg.forEach(function (element, index) {
        const idx = element.indexOf('=');
        const key = element.substring(0, idx);
        const val = element.substring(idx + 1);
        ret[key] = val;
      });
      return ret;
    })(),
  };

  // 覆盖origin, IE11中origin是空的
  if (!ret.origin) {
    ret.origin = [ret.protocol, '://', ret.host, ':', ret.port].join('');
  }

  // origin末尾加个/
  if (ret.origin && !/\/$/.test(ret.origin)) ret.origin += '/';
  return ret;
}

module.exports = parseURL;
