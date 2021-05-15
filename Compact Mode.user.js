// ==UserScript==
// @name         Compact Mode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Compact Mode for tracklists on 1001tracklists
// @author       You
// @match        https://www.1001tracklists.com/tracklist/*
// @icon         https://www.google.com/s2/favicons?domain=1001tracklists.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $('.artM').remove();
    $(".bItm").css("margin-top", "0px");
    $(".mt5").css("margin-top", "0px");
    $(".bItm").css("grid-template-columns", "0px 40px auto");
})();