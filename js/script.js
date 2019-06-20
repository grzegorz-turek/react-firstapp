'use strict';
(function(){

    var movies = [
        {
            id: 1,
            title: 'Das Boot',
            desc: 'Very long movie (ca. 4 hrs) about German submarin during IIWW',
            poster: '<img src="../images/platoon.jpg" />'
        },
        {
            id: 2,
            title: 'Terminator',
            desc: 'The movie about two humanoids fighting about the futer of human raca. Career jump for Arnold Schwarzenegger',
            poster: '<img src="../images/platoon.jpg" />'
        },
        {
            id: 3,
            title: 'Twin Peaks (TV series)',
            desc: 'The portrait of north welathy states small towns societies shown on a patter of mysterius and brutal murder of a youn girl',
            poster: '<img src="../images/platoon.jpg">'
        },
        {
            id: 4,
            title: 'Platoon',
            desc: 'One of the major anti-war movies illustrating high-level of degenration hitting human minds',
            //poster: {img:{src:"../images/platoon.jpg"}}
        }
    ];

    var moviesElements = movies.map(function(movie) {
        return React.createElement('li', {key: movie.id},
            React.createElement('h2', {}, movie.title),
            React.createElement('p', {}, movie.desc),
            React.createElement('div', {}, movie.poster)
            //React.createElement('img', {src:movie.poster}, movie.poster)
          );
      });

    var element =
        React.createElement('div', {},
            React.createElement('h1', {}, 'Lista filmów'),
            React.createElement('ul', {}, moviesElements)
        ); // MUSI BYĆ ; ???
    ReactDOM.render(element, document.getElementById('app'));

    /*
    // ------------------------------------------- 1. NOT WORKING - BEGINNING -------------------------------------------
    var element =
        React.createElement('div', {},
            React.createElement('h1', {}, 'Lista filmów'),
            React.createElement('ul', {},
                movies.forEach(function(element) {
                    console.log(element.title); // WORKING OK
                    console.log(element.desc); // WORKING OK
                    createRecord(element.title, element.desc); // NOT WORKING, WTF?
                })
            )
        );
    ReactDOM.render(element, document.getElementById('app'));

    function createRecord(filmTitle, filmDesc) {
        return React.createElement('li', {},
            React.createElement('h2', {}, filmTitle),
            React.createElement('p', {}, filmDesc)
        );
    }
    // ------------------------------------------- 1. NOT WORKING - END -------------------------------------------
    */

    /*
    // ------------------------------------------- 2. NOT WORKING - BEGINNING -------------------------------------------
    var element =
        React.createElement('div', {},
            React.createElement('h1', {}, 'Lista filmów'),
            React.createElement('ul', {},
                for(var i = 0; i < movies.length; i++) { // NOT WORKING, WHY?
                    createRecord(movies[i].title, movies[i].desc); // NOT WORKING, WHY?
                } // NOT WORKING, WHY?
                //createRecord(movies[1].title, movies[1].desc); // IF REPLACES THREE LINES ABOVE IT WORKS, WTF?
            )
        );
    ReactDOM.render(element, document.getElementById('app'));

    function createRecord(filmTitle, filmDesc) {
        return React.createElement('li', {},
            React.createElement('h2', {}, filmTitle),
            React.createElement('p', {}, filmDesc)
        );
    }
    // ------------------------------------------- 2. NOT WORKING - END -------------------------------------------
    */

})();