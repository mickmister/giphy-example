var state = {
  searchResponse: null,
  currentPage: 1,
  linksPerPage: 5,

  /*
    get the page's offset
  */
  getOffset: () => {
    if (!state.searchResponse || state.currentPage === 0) {
      return 0;
    }

    return state.currentPage * state.linksPerPage;
  },

  /*
    get the search box's text and make it url-friendly
  */
  getUrlEncodedSearchValue: () => {
    var searchBox = document.getElementById('search-box');
    var searchValue = searchBox.value;
    return searchValue.toLowerCase().split(' ').join('+');
  },

  /*
    total number of pages for the current search
  */
  getNumPages: () => {
    if (!state.searchResponse) {
      return 0;
    }
    return parseInt(state.searchResponse.pagination.total_count / state.linksPerPage) + 1;
  },
};
