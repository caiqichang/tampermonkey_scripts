// ==UserScript==
// @name         add_vconsole
// @namespace    http://tampermonkey.net/
// @version      2024-12-26_09-35
// @description  add vconsole
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

    fetch("https://unpkg.com/vconsole@latest/dist/vconsole.min.js")
        .then(i => i.text())
        .then(i => {
            appendToBody("script", i)
            appendToBody("script", `
                new window.VConsole()
            `)
        })
})();