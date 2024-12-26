// ==UserScript==
// @name         remove_bing_search_suggestion
// @namespace    http://tampermonkey.net/
// @version      2024-12-24
// @description  remove bing search suggestion
// @author       caiqichang
// @match        *://*.bing.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Your code here...
    document.querySelector("body").innerHTML += `
        <style>
            #sa_pn_block {
                display: none !important;
            }
        </style>
    `
})();