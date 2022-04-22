/**
 *  Create by appleex on 2022/4/20 10:43 上午.
 */
'use strict';

/**
 * toggleFullScreen
 *
 * @summary toggleFullScreen
 * @static
 * @since 1.0.4
 * @category Dom
 * @example
 *
 * _.toggleFullScreen();
 * // =>
 *
 */
function toggleFullScreen(){
  let doc = window.document;
  let docEl = doc.documentElement;

  let requestFullScreen =
      docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  let cancelFullScreen =
      doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  } else {
    cancelFullScreen.call(doc);
  }
}

module.exports = toggleFullScreen;
