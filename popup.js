document.addEventListener('DOMContentLoaded', function() {
    var searchBox = document.getElementById('searchBox');
    var form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      var query = searchBox.value;
      var searchUrl = "https://en.wikipedia.org/w/index.php?title=Special:Search&limit=20&ns0=1&search=" + encodeURIComponent(query);
      chrome.tabs.update({ url: searchUrl });
      window.close();
    });
  });
  