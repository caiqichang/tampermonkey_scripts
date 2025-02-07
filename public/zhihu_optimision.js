// ==UserScript==
// @name         zhihu_optimision
// @namespace    http://tampermonkey.net/
// @version      2025-02-07_14_13
// @downloadURL  https://raw.githubusercontent.com/caiqichang/tampermonkey_scripts/refs/heads/master/public/zhihu_optimision.js
// @updateURL    https://raw.githubusercontent.com/caiqichang/tampermonkey_scripts/refs/heads/master/public/zhihu_optimision.js
// @description  zhihu optimision
// @author       caiqichang
// @match        *://*.zhihu.com/*
// @grant        GM_addElement
// ==/UserScript==

(function () {
    'use strict';
    
    GM_addElement("style", {
        textContent: `
            .AppHeader-inner {
                min-width: unset;
                width: 800px;
                margin-left: 0px;
            }
            .AppHeader.is-hidden .AppHeader-inner {
                -webkit-transform: unset !important;
                transform: unset !important;
            }
            .PageHeader.is-shown,
            .SearchBar-label:not(.SearchBar-label--history),
            [data-za-module=HotSearchWordList],
            .Pc-Business-Card-PcTopFeedBanner,
            .Tabs-item.AppHeader-Tab.Tabs-item--noMeta,
            [data-za-detail-view-path-module=RightSideBar]
            {
                display: none;
            }
        `,
    })
})();