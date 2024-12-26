// ==UserScript==
// @name         remove_bing_search_suggestion
// @namespace    http://tampermonkey.net/
// @version      2024-12-26_09-35
// @description  remove bing search suggestion
// @author       caiqichang
// @match        *://*.bing.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const appendToBody = (tag, content) => {
        let element = document.createElement(tag)
        element.innerHTML = content
        document.body.appendChild(element)
    }

    appendToBody("style", `
        #sa_pn_block {
            display: none !important;
        }
    `)
})();