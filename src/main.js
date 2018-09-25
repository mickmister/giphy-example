/*
  the page has loaded
*/
window.addEventListener('load', async() => {
  // assign listener to submit button
  var form = document.getElementById('search-form');
  form.onsubmit = (e) => {
    e.preventDefault();
    state.currentPage = 0;
    submitSearch();
  };

  domApi.initPagination();
});

/*
  search for whatever is in the search box
*/
var submitSearch = async() => {
  var payload = giphyApi.getRequestPayload();
  state.searchResponse = await giphyApi.sendRequest(payload);

  domApi.handlePaginationUpdates();
  domApi.handleLinkCreations();
};
