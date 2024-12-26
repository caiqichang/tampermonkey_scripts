// ==UserScript==
// @name         add_eruda
// @namespace    http://tampermonkey.net/
// @version      2024-12-25
// @description  add eruda
// @author       caiqichang
// @match        *://*/*
// @grant        none
// @run-at       documen-start
// ==/UserScript==

(function () {
    'use strict';

    fetch("https://cdn.jsdelivr.net/npm/eruda")
        .then(i => i.text())
        .then(i => {
            let script = document.createElement("script")
            script.innerText = i
            document.body.appendChild(script)

            // eslint-disable-next-line
            eruda.init()
        })
})();