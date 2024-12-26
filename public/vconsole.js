// ==UserScript==
// @name         vConsole
// @namespace    http://tampermonkey.net/
// @version      2024-12-25
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
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
            new window.VConsole()
        })
})();