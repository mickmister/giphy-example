/*
  the page has loaded
*/
window.addEventListener('load', async() => {
  // assign listener to submit button
  var form = document.getElementById('search-form');
  form.onsubmit = (e) => {
    e.preventDefault();
    state.currentPage = 0;
    giphyApi.submitSearch();
  };

  domApi.initPagination();
});
