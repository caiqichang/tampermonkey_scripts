// ==UserScript==
// @name         tieba_optimision
// @namespace    http://tampermonkey.net/
// @version      2025-01-21_10_02
// @downloadURL  https://raw.githubusercontent.com/caiqichang/tampermonkey_scripts/refs/heads/master/public/tieba_optimision.js
// @updateURL    https://raw.githubusercontent.com/caiqichang/tampermonkey_scripts/refs/heads/master/public/tieba_optimision.js
// @description  tieba optimision
// @author       caiqichang
// @match        *://tieba.baidu.com/*
// @grant        GM_addElement
// ==/UserScript==

(function () {
    'use strict';

    document.querySelector(".r-top-sec")?.remove()
    document.querySelector(".r-right-sec")?.remove()
    document.querySelector(".left-sec")?.remove()
    document.querySelector(".right_section.right_bright")?.remove()
    document.querySelectorAll("div[ad-dom-img]")?.forEach(e => e.remove())
    document.querySelectorAll("a[rel=\"noreferrer\"]")?.forEach(e => e.remove())
    
    GM_addElement("style", {
        textContent: `
            .top-sec.clearfix {
                opacity: 0;
            }
            .page-container .content-sec {
                background: unset;
            }
            .n_right, .page-container .r-left-sec, .page-container .right-sec {
                width: 100%;
            }
        `,
    })
})();