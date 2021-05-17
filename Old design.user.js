// ==UserScript==
// @name         Old design
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Old Design recreation for 1001TL
// @author       AboveColin
// @match        https://www.1001tracklists.com/*
// @exclude      https://www.1001tracklists.com/tracklist/*
// @icon         https://www.google.com/s2/favicons?domain=1001tracklists.com
// @grant        none
// @require https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==

(function() {
    'use strict';

    //Date on image
    var Date = document.getElementsByClassName("bDate");
    var Image = document.getElementsByClassName("bItm");
    var i;
    for (i = 0; i < Image.length; i++) {
        const DateA = Date[i].innerHTML.toString().replace("th", "").replace("st", "").split(" ")
        const newDiv = document.createElement("div");
        const newDivD = document.createElement("div");
        const newContentD = document.createTextNode(DateA[0]);
        const newDivM = document.createElement("div");
        const newContentM = document.createTextNode(DateA[1].slice(0,3));
        newDivM.appendChild(newContentM);
        newDivD.appendChild(newContentD);
        newDiv.appendChild(newDivD);
        newDiv.appendChild(newDivM);
        newDiv.classList.add("imgDate");

        Image[i].append(newDiv);
    }
    $(".bDate").remove();

    //User under Title
    var tlUser = document.getElementsByClassName("tlUser");
    var Title = document.getElementsByClassName("bTitle");
    $('.bTitle').each(function(i, obj) {Title[i].append(tlUser[i])});

    //Hr under msot viewed tracklist etc
    var wRow = document.getElementsByClassName("wRow");

    // CSS Pog
    var sheet = window.document.styleSheets[0];
    $(".bItm").css("margin-top", "0px");
    $(".bTitle").css("padding-top", "5px");
    $(".bItm").css("border-radius", "0px");

    sheet.insertRule('.tlUser { margin-top: 8px; font-size: 85%; opacity: .80;}', sheet.cssRules.length);

    sheet.insertRule('.imgDate {  overflow: hidden; position: absolute; left: 2px; color: #FFF; text-align: center; border-bottom-left-radius: 2px; width: 96px; height: 30px; bottom: 2px; position: absolute; background: rgba(0,0,0,0.5); background: linear-gradient(0,rgba(0,0,0,0.8),rgba(0,0,0,0.6) 50%,rgba(0,0,0,0.0) 100%);}', sheet.cssRules.length);
    sheet.insertRule('.imgDate div { font-weight: bold; line-height: 25px; position: absolute; top: 3px; z-index: auto;}', sheet.cssRules.length);
    sheet.insertRule('.imgDate div:first-child { font-size: 200%; width: 35px; left: 0;}', sheet.cssRules.length);
    sheet.insertRule('.imgDate div:nth-child(2) { font-size: 150%;  left: 35px;}', sheet.cssRules.length);

})();
