// import Masonry from 'masonry-layout';

window.onload = () =>{
    const grid = document.querySelector('.grid');

    const masonry = new Masonry(grid, {
        itemSelector: '.grid-item',
        gutter: 10,
        originLeft: false,
        originTop: false,
    });

    masonry.on('layoutComplete', () => console.log('layout Complete'));

};

