/**
 *  Create by appleex on 2022/4/18 9:52 上午.
 */
'use strict';

/**
 * To create a DOMString, the URL.createObjectURL() static method creates a DOMString containing a URL representing the object given in the parameter.
 * The lifetime of this URL is bound to the document in the window that created it.
 * This new URL object represents the specified File or Blob object.
 *
 * @summary downloadFile
 * @static
 * @since 1.0.4
 * @category Dom
 * @param {*} data The value to process.
 * @param {string} filename File name.
 * @param {string} mime File type.
 * @param {string} bom The value to process.
 * @returns {File} Returns the number.
 * @example
 *
 * _.downloadFile();
 * // => file
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
