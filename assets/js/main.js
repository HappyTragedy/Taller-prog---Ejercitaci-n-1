/*
Exercises

Tips: 
1. To show the result of each exercise write a consol log with the form: console.log('Ex 1.', value or function).
2. Make some research about the usage of reduce, some and many.
3. Create a js file called utils.js and place all helper functions in it. (Ex 10 and 14)

1) Import songs array using modules.
*/
import songs from "./songs.js";

/*
2. Use the map function to create a new array with the title of each song in uppercase letters.
*/
const uppercase = songs.map(function (elem) {
  return { title: elem.title.toUpperCase() };
});
console.log("2. ", uppercase);

/*
3. Use the filter function to create a new array with all the songs released before 1975.
*/
const before1975 = songs.filter((yearbefore1975) => yearbefore1975.year < 1975);
console.log("3. ",before1975);

/*
4. Use destructuring to create a variable that stores the title of the first song in the array. ???
*/
const primerTitulo = songs[0];
console.log("4. ", primerTitulo.title);

/*
5. Use the find function to get the object representing the song "Hotel California".
*/
const HotelCalifornia = songs.find(cali => {return cali.title === 'Hotel California'});
console.log("5. ",HotelCalifornia);

/*
6. Use the rest operator to create a function that takes any number of arguments and returns their sum. (Tip: Use reduce)
Falta lo de rest operator ??? */
const sum = songs.reduce((acc, curr) => acc + curr.year, 0);
console.log("6. ",sum);

/*
7. Use the map function and template literals to create a new array with strings in the format "Title - Artist (Year)" for each song.
*/
const stringFormat = songs.map((i) => {
    return `${i.title} - ${i.artist} - ${i.year}`;
});
console.log("7. ",stringFormat);

/*
8. Use destructuring and the filter function to create a new array with the titles of all the songs by The Beatles.
*/
const theBeatlesSongs = songs.filter((cancionDeLosBeatles) => cancionDeLosBeatles.artist === "The Beatles");
const cancionBeatles = theBeatlesSongs.map((beatles) => {return beatles.title});
console.log("8. ",cancionBeatles);

/*
9. Use arrow functions and the reduce function to calculate the total number of years between all the songs' release dates. (Tip: Use reduce)
*/


/*
10. Create a module that exports a function to calculate the average release year of the songs in the input array. (Tip: Use reduce.)
*/


/*
11. Use the find function to get the object representing the song with the longest title. ???

const compare = songs.map(function (elem) {
    return elem.title.length ==
})
const longestTitle = songs.find(long => {return long.title.length})
*/

/*
12. Use destructuring and template literals to log the title, artist and year of the first element of the array.
*/
const [firstElement] = songs;
const {title, artist, year} = firstElement;
console.log("12. ", `${title} - ${artist} - ${year}`);

/*
13. Use the rest operator to create a new array without the first element.
*/


/*
14. Import the filter() function from a utils.js module and use it to create a new array with all the songs that have "Love" in the title.
*/


/*
15. Use the every() method to check if all the songs have titles that are 5 or more characters long.
TUVE QUE BUSCAR COMO USARLO*/
const fiveOrMoreCharactLong = songs.map(function (elem){
    return elem.title.length > 5
});
console.log("15. ", fiveOrMoreCharactLong);

/*
16. Use the some() method to check if there are any songs from the 80s.
TUVE QUE BUSCAR COMO USARLO*/
const fromThe80s = songs.map(function (elem){
    return elem.year > 1979 && elem.year < 1990
});
console.log("16. ", fromThe80s);

/*
17. Use a template literal to create a string that says "The Beatles released Let It Be in 1970."
*/
const templateLiteral = songs.find((letIt) => {return letIt.title === 'Let It Be'});
console.log("17. ",`${templateLiteral.artist} released ${templateLiteral.title} in ${templateLiteral.year}`);

/*
18. Use the map() method to create a new array with just the artist names.
*/
const artistNames = songs.map((elem) => {
    return {artist: elem.artist};
});
console.log("18. ",artistNames);

/*
19. Create a function called randomMovie that returns one movie from the songs array randomly. Log the call of this function 3 times.

20. Write your own function using at least 3 concepts.

*/
