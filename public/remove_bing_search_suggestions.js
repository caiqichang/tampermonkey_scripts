// ==UserScript==
// @name         Remove bing search suggestions
// @namespace    http://tampermonkey.net/
// @version      2024-12-24
// @description  try to take over the world!
// @author       You
// @match        *://*.bing.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bing.com
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