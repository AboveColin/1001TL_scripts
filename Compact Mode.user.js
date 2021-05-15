// ==UserScript==
// @name         Compact Mode
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Compact Mode for tracklists on 1001tracklists
// @author       AboveColin
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
    $(".bCont").css("display", "block");
    var MediaRow = document.getElementsByClassName("iRow grow mediaRow");
    var Row = document.getElementsByClassName("bCont tl");
    $('.mediaRow').each(function(i, obj) {Row[i].append(MediaRow[i])});
})();
