// ==UserScript==
// @name         add_eurda
// @namespace    http://tampermonkey.net/
// @version      2024-12-26_09-35
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