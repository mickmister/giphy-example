var domApi =  {

  /*
    make all the links to show on the page
  */
  handleLinkCreations: () => {
    var data = state.searchResponse.data;
    var links = data.map(domApi.makeClickableLink);
    var linkArea = document.getElementById('link-area');
    linkArea.innerHTML = '';
    links.forEach(link => {
      linkArea.appendChild(link);
    });
    return links;
  },

  /*
    update page number and disable paging buttons if appropriate
  */
  handlePaginationUpdates: () => {
    var leftPageElement = document.getElementById('left-pagination');
    var rightPageElement = document.getElementById('right-pagination');
    leftPageElement.disabled = false;
    rightPageElement.disabled = false;

    var numPages = state.getNumPages();
    var numPagesElement = document.getElementById('num-pages');
    numPagesElement.innerHTML = numPages;
    if (state.currentPage === numPages) {
      rightPageElement.disabled = true;
    }
    if (state.currentPage === 0) {
      leftPageElement.disabled = true;
    }
    document.getElementById('current-page').innerHTML = state.currentPage + 1;
  },

  /*
    clear old gif and render new gif
  */
  showGif: (embedUrl) => {
    var gifArea = document.getElementById('gif-area');
    gifArea.innerHTML = ''; // clear the gif area

    var iframe = domApi.createIframe(embedUrl);
    gifArea.appendChild(iframe); // put the new gif on the page
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
    a.onclick = () => domApi.showGif(embedUrl);
    container.appendChild(a);

    var img = document.createElement('img');
    img.src = gifObject.images.fixed_height_small_still.url;
    img.onclick = () => domApi.showGif(embedUrl);

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
    iframe.width = 480;
    iframe.height = 264;
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
    document.getElementById('num-pages').innerHTML = '0';
  },

  /*
    we clicked the previous page button
  */
  pageLeft: (e) => {
    e.preventDefault();
    state.currentPage = state.currentPage - 1;
    submitSearch();
  },

  /*
    we clicked the next page button
  */
  pageRight: (e) => {
    e.preventDefault();
    state.currentPage = state.currentPage + 1;
    submitSearch();
  },
};
