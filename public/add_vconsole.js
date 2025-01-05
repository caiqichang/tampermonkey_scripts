// ==UserScript==
// @name         add_vconsole
// @namespace    http://tampermonkey.net/
// @version      2025-01-05_12-05
// @downloadURL  https://raw.githubusercontent.com/caiqichang/tampermonkey_scripts/refs/heads/master/public/add_vconsole.js
// @updateURL    https://raw.githubusercontent.com/caiqichang/tampermonkey_scripts/refs/heads/master/public/add_vconsole.js
// @description  add vconsole
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
        url: "https://unpkg.com/vconsole@latest/dist/vconsole.min.js",
        onload(response) {
            GM_addElement("script", {
                textContent: response.responseText,
            })
            GM_addElement("script", {
                textContent: `
                    new window.VConsole()
                `,
            })
        }
    })
})();