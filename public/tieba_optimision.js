// ==UserScript==
// @name         tieba_optimision
// @namespace    http://tampermonkey.net/
// @version      2025-02-07_15_07
// @downloadURL  https://raw.githubusercontent.com/caiqichang/tampermonkey_scripts/refs/heads/master/public/tieba_optimision.js
// @updateURL    https://raw.githubusercontent.com/caiqichang/tampermonkey_scripts/refs/heads/master/public/tieba_optimision.js
// @description  tieba optimision
// @author       caiqichang
// @match        *://tieba.baidu.com/*
// @grant        GM_addElement
// ==/UserScript==

(function () {
    'use strict';

    GM_addElement("style", {
        textContent: `
            .r-top-sec,
            .r-right-sec,
            .left-sec,
            .right_section.right_bright,
            div[ad-dom-img],
            .forum_content .aside,
            .card_banner.card_banner_link,
            .card_top_wrap.clearfix.card_top_theme,
            .j_click_stats,
            .clearfix.thread_item_box:not(.j_thread_list),
            .l_post.l_post_bright.j_l_post.clearfix[data-field="{}"]
            {
                display: none;
            }
            .top-sec.clearfix {
                opacity: 0;
            }
            .page-container .content-sec {
                background: unset;
            }
            .search_internal_wrap {
                float: left !important;
            }
            .nav_list.j_nav_list {
                width: unset;
            }
        `,
    })
})();