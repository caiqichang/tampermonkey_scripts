// ==UserScript==
// @name         eruda
// @namespace    http://tampermonkey.net/
// @version      2024-12-25
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       documen-start
// ==/UserScript==

(function () {
    'use strict';

    // Your code here...
    fetch("https://cdn.jsdelivr.net/npm/eruda")
        .then(i => i.text())
        .then(i => {
            let script = document.createElement("script")
            script.innerText = i
            document.body.appendChild(script)
            eruda.init()
        })
})();