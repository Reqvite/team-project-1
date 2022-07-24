// // import Masonry from 'masonry-layout';


window.onload = () => {
    const grid = document.querySelector('.grid');

    const masonry = new Masonry(grid, {
        itemSelector: '.grid-item',

        gutter: 10,
        originLeft: false,
        originTop: false,
    });

    masonry.on('layoutComplete', () => console.log('layout Complete'));

};

// new Masonry (document.getElementById('masonry'), {
//     gap: 10,
//     columns:3
// });

// const $grid = $('.grid').masonry({
//     columnWidth: 50
//   });
  // change size of item by toggling gigante class
//   $grid.on( 'click', '.grid-item', function() {
//     $(this).toggleClass('gigante');
//     // trigger layout after item size changes
//     $grid.masonry('layout');
//   });