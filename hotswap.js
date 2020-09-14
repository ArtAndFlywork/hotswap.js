/**
 *
 * Hot Swap – global function
 * Load an URL, pick the content of a selector and put it in the 
 * corresponding selector on the current page
 *
 * usage: 
 * hotswap('link to load data from', '.container1, .container2');
 * <div class="container1">stuff that will be replaced with new content</div>
 *
 */

function hotswap(href, targets) {
  $.get(href, function(data, status){
    var t = targets.split(',');
    for (var i = t.length - 1; i >= 0; i--) {
      var targetSelector = t[i];
      hot = $('<div></div>').append(data).find(targetSelector).html();
      if (hot) {
        $(targetSelector).html(hot);
      } else {
        $(targetSelector).html('<!-- no data -->');
      }
    }
    
    // update the browser history & url
    window.history.pushState(null,null,href);
    // send a pageview to Google Analytics
    if (typeof ga !== 'undefined' && typeof ga === 'function') {
      ga('send', 'pageview', href);
    }
  });
}


/**
 *
 * Hot Swap – HTML attribute binding
 * usage: 
 * <a href="link to load data from" data-hotswap=".container1, .container2">
 * <div class="container1">stuff that will be replaced with new content</div>
 *
 */

$('body').on('click','a[href][data-hotswap]', function(e){
  e.preventDefault();
  var targets = $(this).attr('data-hotswap');
  var href = $(this).attr('href');
  hotswap(href, targets);
});
