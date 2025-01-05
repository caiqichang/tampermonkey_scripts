// ==UserScript==
// @name         remove_bing_search_suggestion
// @namespace    http://tampermonkey.net/
// @version      2025-01-05_12-05
// @downloadURL  https://raw.githubusercontent.com/caiqichang/tampermonkey_scripts/refs/heads/master/public/remove_bing_search_suggestion.js
// @updateURL    https://raw.githubusercontent.com/caiqichang/tampermonkey_scripts/refs/heads/master/public/remove_bing_search_suggestion.js
// @description  remove bing search suggestion
// @author       caiqichang
// @match        *://*.bing.com/*
// @grant        GM_addElement
// ==/UserScript==

(function () {
    'use strict';

    GM_addElement("style", {
        textContent: `
            #sa_pn_block {
                display: none !important;
            }
        `,
    })
})();