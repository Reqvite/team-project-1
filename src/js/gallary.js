
window.onload = () => {
    const grid = document.querySelector('.grid');

    const masonry = new Masonry(grid, {
        itemSelector: '.grid-item',

        gutter: 10,
        // originLeft: false,
        originCenter: true,
        originTop: false,
        // columnWidth: 30,
        // fitWidth: true
        // originRight: false,
        // originBottom: true,
    });

    masonry.on('layoutComplete', () => console.log('layout Complete'));

};
