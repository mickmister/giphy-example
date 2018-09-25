var domApi =  {

  /*
    make all the links to show on the page
  */
  handleLinkCreations: () => {
    var data = state.searchResponse.data;
    var linkArea = document.getElementById('link-area');

    // clear link area
    linkArea.innerHTML = '';

    var newLinks = data.map(domApi.makeClickableLink);

    /*
      TODO: add new links to the link area
    */
    return newLinks;
  },

  /*
    update page number and disable paging buttons if appropriate
  */
  handlePaginationUpdates: () => {
    var numPages = state.getNumPages();
    var numResults = state.getNumResults();

    /* TODO: update number of results on page */

    /* TODO: update page number on page */

    var leftPageElement = document.getElementById('left-pagination');
    var rightPageElement = document.getElementById('right-pagination');

    /* TODO: disable previous and next page buttons appropriately */
  },

  /*
    clear old gif and render new gif
  */
  showGif: (embedUrl) => {
    var gifArea = document.getElementById('gif-area');
    /*
      TODO: clear the gif area
    */

    var gif = domApi.createIframe(embedUrl);
    /*
      TODO: add gif to page
    */
  },

  /*
    create a link to show the appropriate gif in the gif area
  */
  makeClickableLink: (gifObject) => {
    var title = gifObject.title;
    var embedUrl = gifObject.embed_url;

    var container = document.createElement('div');
    container.className = 'link-container';

    var a = document.createElement('a');
    a.innerHTML = title;
    a.className = 'button button-royal';
    a.onclick = () => domApi.showGif(embedUrl);
    container.appendChild(a);

    var img = document.createElement('img');
    img.onclick = () => domApi.showGif(embedUrl);
    var availableImages = gifObject.images;
    /*
      TODO: attach still image of gif to link
    */

    var imgDiv = document.createElement('div');
    imgDiv.className = 'img-container'
    imgDiv.appendChild(img);
    container.appendChild(imgDiv);

    return container;
  },

  /*
    create the element that this gif will be rendered in
  */
  createIframe: (embedUrl) => {
    var iframe = document.createElement('iframe');
    iframe.src = embedUrl;
    iframe.width = state.getGifWidth();
    iframe.height = state.getGifHeight();
    iframe.frameBorder = 0;
    iframe.className = 'giphy-embed';
    iframe.allowFullscreen = true;
    return iframe;
  },

  /*
    initialize the pagination buttons
  */
  initPagination: () => {
    var leftPageElement = document.getElementById('left-pagination');
    leftPageElement.onclick = domApi.pageLeft;
    leftPageElement.disabled = true;

    var rightPageElement = document.getElementById('right-pagination')
    rightPageElement.onclick = domApi.pageRight;
    rightPageElement.disabled = true;

    document.getElementById('current-page').innerHTML = '-';
    document.getElementById('num-results').innerHTML = '0';
  },

  /*
    we clicked the previous page button
  */
  pageLeft: (e) => {
    /* TODO: go to previous page of gifs */
  },

  /*
    we clicked the next page button
  */
  pageRight: (e) => {
    /* TODO: go to next page of gifs */
  },
};
