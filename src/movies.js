// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

/* should return an array
should return a new array, not update the original one
should return a new array with the same length as the original one
*/

function getAllDirectors(moviesArray) {
return moviesArray.map(movie => movie.director)
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

/* should return a number
should return 0 if the array is empty
should return 0 if none of the movies in the array were directed by Steven Spielberg
should only count drama movies
should return 2 if there are only 2 Steven Spielberg movies
should return 4 when called with the array of movies exported from "data.js"
*/

function howManyMovies(moviesArray) {

    return moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length;

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

/* should return a number
should return the average score of 2 movies with score 8 each
should be rounded to 2 decimals places
should return 0 if an empty array is passed
should return average even if one of the movies does not have score */

//https://www.w3schools.com/jsref/jsref_tofixed.asp  como fijar los decimales del resultado numérico

// sobre todo si quiero usar el metodo reduce para sumar teniendo objetos, lo ideal es que tenga un valor inicial para que me funcione siempre a la perfección


function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0;
    }

    let scores = moviesArray.reduce((totalScore, movie) => {
        if (movie.score === undefined){
            return totalScore;
        }else{
            return totalScore + movie.score
        }
    }, 0); 
    
    let averageScore = scores / moviesArray.length;

    return Number(averageScore.toFixed(2));


}


// Iteration 4: Drama movies - Get the average of Drama Movies

/* should return a number
should return the score of a single element array
should return the average of the rating of the drama movies in the array
should return the average of the array, a floating point number
should only calculate the average for drama movies
should return 0 if there is no Drama movie
*/

function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));

   /* if (dramaMovies.length === 0){
        return 0;
    }

    let overallScore = dramaMovies.reduce((totalScore, film) => {
        if (film.score === undefined){
            return totalScore
        }else{
            return totalScore + film.score
        }
    }, 0)

    const avg = overallScore / dramaMovies.length;

    return Number(avg.toFixed(2)); */

    return scoresAverage(dramaMovies);

}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

/* should return an array
should return a new array, not mutate the original one
should return the element in a single element array
should return the new array in ascending order
should order movies with the same year by their title, alphabetically */

function orderByYear(moviesArray) {

    const chronologicalOrder = [...moviesArray.sort((movie1,movie2)=>{  
        if (movie1.year < movie2.year){
            return -1;
        }else if (movie1.year > movie2.year){
            return 1
        }else{
            return movie1.title.localeCompare(movie2.title);
        }
        
    })]

    return chronologicalOrder;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

/* should return an array
should return a new array, not mutate the original one
should only return the title of the movies, each value should be a string
should return all of items when the array passed has fewer than 20 items
If there are more than 20 elements, return only 20 of them.
should order them alphabetically.
should return the top 20 after ordering them alphabetically.
*/


function orderAlphabetically(moviesArray) {

    const movies = [...moviesArray];
    const moviesTitles= movies.map(film => film.title);

    const orderedMovies = moviesTitles.sort();

    // .sort() va a ordenar usando su método por defecto, que en este caso nos sirve


    return orderedMovies.slice(0,20)

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

/* should return an array
should return a new array, not mutate the original one
should return an array of movies with duration as a number
should return an array of movies with the correct duration for a 31 minute movie
should return an array of movies with the correct duration for a 341 minute movie
should return an array of movies with the correct duration for a 2 hour movie
*/
// https://www.freecodecamp.org/news/how-to-convert-a-string-to-a-number-in-javascript/
function turnHoursToMinutes(moviesArray) {
    




}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
