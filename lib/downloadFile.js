'use strict';

var hasClass = require('./hasClass');

/**
 * downloadFile
 * 创建DOMString
 * @desc URL.createObjectURL() 静态方法会创建一个 DOMString，其中包含一个表示参数中给出的对象的URL。这个 URL 的生命周期和创建它的窗口中的 document 绑定。这个新的URL 对象表示指定的 File 对象或 Blob 对象。
 *
 * @static
 * @since 1.0.0
 * @category Lang
 * @param {*} data The value to process.
 * @param {string} filename The value to process.
 * @param {string} mime The value to process.
 * @param {string} bom The value to process.
 * @returns {string} Returns the number.
 * @example
 *
 * _.toUpper(3.2);
 * // => 3.2
 *
 */
function downloadFile(data, filename, mime, bom) {
  var blobData = (typeof bom !== 'undefined') ? [bom, data] : [data];
  var blob = new Blob(blobData, { type: mime || 'application/octet-stream' });
  if (typeof window.navigator.msSaveBlob !== 'undefined') {
    // IE workaround for "HTML7007: One or more blob URLs were
    // revoked by closing the blob for which they were created.
    // These URLs will no longer resolve as the data backing
    // the URL has been freed."
    window.navigator.msSaveBlob(blob, filename);
  } else {
    var URL = window.webkitURL || window.URL;
    var blobURL = URL.createObjectURL(blob);
    var tempLink = document.createElement('a');
    tempLink.style.display = 'none';
    tempLink.href = blobURL;
    tempLink.setAttribute('download', filename);

    // Safari thinks _blank anchor are pop ups. We only want to set _blank
    // target if the browser does not support the HTML5 download attribute.
    // This allows you to download files in desktop safari if pop up blocking
    // is enabled.
    if (typeof tempLink.download === 'undefined') {
      tempLink.setAttribute('target', '_blank');
    }

    document.body.appendChild(tempLink);
    tempLink.click();
    setTimeout(function() {
      document.body.removeChild(tempLink);
      URL.revokeObjectURL(blobURL);
    }, 100);
  }
}

module.exports = downloadFile;
