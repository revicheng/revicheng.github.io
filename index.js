new TypeIt('#bio_text', {
    })
    .type("A software developer and an aspiring photographer ")
    .go();

var elem = document.querySelector('.container');
var infScroll = new InfiniteScroll( elem, {
    // options
    path: '#photos{{#}}',
    append: '.post',
    history: false,
});

// element argument can be a selector string
// for an individual element
var infScroll = new InfiniteScroll( '.container', {
    // options
});