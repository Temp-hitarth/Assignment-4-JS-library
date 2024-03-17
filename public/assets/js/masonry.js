// masonry js
var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  // options
    itemSelector: '.grid-item',
    columnWidth: 200,
    gutter: 20, // Adjust this according to your grid item margin
    fitWidth: true // Adjust to fit the container's width
});



// init Masonry
var $grid = $('.grid').imagesLoaded( function() {
  // init Masonry after all images have loaded
  $grid.masonry({
    // options...
  });
});