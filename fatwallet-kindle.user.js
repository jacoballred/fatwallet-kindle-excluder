// ==UserScript==
// @name         FatWallet Kindle Excluder
// @namespace    http://www.jacoballred.com/userscripts/fatwallet-kindle/
// @version      1.1
// @description  Exclude Kindle books from the Free Stuff forum listings.
// @homepage     http://www.jacoballred.com/
// @updateURL    http://www.jacoballred.com/userscripts/fatwallet-kindle.user.js
// @downloadURL  http://www.jacoballred.com/userscripts/fatwallet-kindle.user.js
// @match        http://www.fatwallet.com/forums/free-stuff/
// @match        http://www.fatwallet.com/forums/hot-deals/
// @copyright    © 2014 Corban Works, LLC
// ==/UserScript==

$(function() {  
    jQuery.expr[':'].Contains = function(a, i, m) {
      return jQuery(a).text().toUpperCase()
          .indexOf(m[3].toUpperCase()) >= 0;
    };
    
    $("tr.topicRow:Contains('kindle book'), tr.topicRowHover:Contains('kindle book')").remove();
    $("tr.alt_row").removeClass("alt_row");
    $("tr.topicRow, tr.topicRowHover").filter(":odd").addClass("alt_row");
});
