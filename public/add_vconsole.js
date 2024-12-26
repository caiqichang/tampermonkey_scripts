// ==UserScript==
// @name         add_vconsole
// @namespace    http://tampermonkey.net/
// @version      2024-12-25
// @description  add vconsole
// @author       caiqichang
// @match        *://*/*
// @grant        none
// @run-at       documen-start
// ==/UserScript==

(function () {
    'use strict';

    // Your code here...
    fetch("https://unpkg.com/vconsole@latest/dist/vconsole.min.js")
        .then(i => i.text())
        .then(i => {
            let script = document.createElement("script")
            script.innerText = i
            document.body.appendChild(script)

            // eslint-disable-next-line
            new window.VConsole()
        })
})();