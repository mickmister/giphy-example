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
    total number of pages for the current search
  */
  getNumPages: () => {
    if (!state.searchResponse) {
      return 0;
    }
    var totalItems = state.searchResponse.pagination.total_count;
    if (totalItems === 0) {
      return 0;
    }

    return parseInt(totalItems / state.linksPerPage) + 1;
  },

  /*
    total number of pages for the current search
  */
  getNumResults: () => {
    if (!state.searchResponse) {
      return 0;
    }
    return state.searchResponse.pagination.total_count;
  },

  /*
    get the search box's text and make it url-friendly
  */
  getUrlEncodedSearchValue: () => {
    var searchBox = document.getElementById('search-box');
    var searchValue = searchBox.value;
    return searchValue.toLowerCase().split(' ').join('+');
  },

  getGifWidth: () => {
    return document.getElementById('gif-width').value;
  },

  getGifHeight: () => {
    return document.getElementById('gif-height').value;
  },
};
