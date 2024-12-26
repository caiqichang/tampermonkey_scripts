// ==UserScript==
// @name         add_eruda
// @namespace    http://tampermonkey.net/
// @version      2024-12-26_09-33
// @description  add eruda
// @author       caiqichang
// @match        *://*/*
// @grant        none
// @run-at       documen-start
// ==/UserScript==

(function () {
    'use strict';

    const appendToBody = (tag, content) => {
        let element = document.createElement(tag)
        element.innerHTML = content
        document.body.appendChild(element)
    }

    fetch("https://cdn.jsdelivr.net/npm/eruda")
        .then(i => i.text())
        .then(i => {
            appendToBody("script", i)
            appendToBody("script", `
                eruda.init()
            `)
        })
})();