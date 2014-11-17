// ==UserScript==
// @name         FatWallet Kindle Excluder
// @namespace    http://www.jacoballred.com/userscripts/fatwallet-kindle/
// @version      1.3
// @description  Exclude Kindle books from the Free Stuff forum listings.
// @homepage     http://www.jacoballred.com/
// @updateURL    http://www.jacoballred.com/userscripts/fatwallet-kindle.user.js
// @downloadURL  http://www.jacoballred.com/userscripts/fatwallet-kindle.user.js
// @match        http://www.fatwallet.com/forums/free-stuff/
// @match        http://www.fatwallet.com/forums/hot-deals/
// @grant        none
// @copyright    © 2014 Corban Works, LLC
// ==/UserScript==

$(function() {
    jQuery.expr[':'].Contains = function(a, i, m) {
      return jQuery(a).text().toUpperCase()
          .indexOf(m[3].toUpperCase()) >= 0;
    };

    // Remove "kindle edition", "(kindle)"
    $("tr.topicRow:Contains('kindle edition'), tr.topicRowHover:Contains('kindle edition')").remove();
    $("tr.topicRow:Contains('(kindle)'), tr.topicRowHover:Contains('(kindle)')").remove();

    // Remove "kindle book", "kindle ebook", "kindle tech book", "kindle tech ebook"
    var regex = new RegExp(/kindle (tech )?(e)?book/i);
    $("tr.topicRow").filter(function () {
        return regex.test($(this).text());
    }).remove();
    $("tr.topicRowHover").filter(function () {
        return regex.test($(this).text());
    }).remove();

    $("tr.alt_row").removeClass("alt_row");
    $("tr.topicRow, tr.topicRowHover").filter(":odd").addClass("alt_row");
});
