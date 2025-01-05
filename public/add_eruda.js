// ==UserScript==
// @name         add_eruda
// @namespace    http://tampermonkey.net/
// @version      2025-01-05_12-05
// @downloadURL  https://raw.githubusercontent.com/caiqichang/tampermonkey_scripts/refs/heads/master/public/add_eruda.js
// @updateURL    https://raw.githubusercontent.com/caiqichang/tampermonkey_scripts/refs/heads/master/public/add_eruda.js
// @description  add eurda
// @author       caiqichang
// @match        *://*/*
// @grant        GM_xmlhttpRequest
// @grant        GM_addElement
// @run-at       documen-start
// ==/UserScript==

(function () {
    'use strict';

    GM_xmlhttpRequest({
        method: "GET",
        url: "https://cdn.jsdelivr.net/npm/eruda",
        onload(response) {
            GM_addElement("script", {
                textContent: response.responseText,
            })
            GM_addElement("script", {
                textContent: `
                    eruda.init()
                `,
            })
        }
    })

    // todo
    // - fail to load `data:application/x-font-woff` in CSP
})();