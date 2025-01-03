// ==UserScript==
// @name         add_vconsole
// @namespace    http://tampermonkey.net/
// @version      2024-12-26_09-35
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