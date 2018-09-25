var giphyApi = {

  /*
    generate giphy query
  */
  getRequestPayload: () => {
    var urlEncodedSearch = state.getUrlEncodedSearchValue();
    var offset = state.getOffset();
    return {
      api_key: env.giphyApiKey,
      q: urlEncodedSearch,
      limit: state.linksPerPage,
      offset: offset
    };
  },

  /*
    send giphy request and return response
  */
  sendRequest: async(payload) => {
    var marshalledPayload = Object.keys(payload).map(key => `${key}=${payload[key]}`).join('&');

    var xhrResponse = await fetch(`https://api.giphy.com/v1/gifs/search?${marshalledPayload}`);
    return await xhrResponse.json();
  },

  /*
    search for whatever is in the search box
  */
  submitSearch: async() => {
    var payload = giphyApi.getRequestPayload();
    state.searchResponse = await giphyApi.sendRequest(payload);

    domApi.handlePaginationUpdates();
    domApi.handleLinkCreations();
  },
}
