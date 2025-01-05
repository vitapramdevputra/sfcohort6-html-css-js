//class is similar to OBJECT in salesforce
class Movie {
    //class variables similar to custom fields in any object
    name;
    director;
    genre;
    ratings;

    //helps us to create new instance (new records)
        //metaphorically compare with page layout.
    constructor(name, director, genre, ratings) {

        this.name = name;
        this.director = director;
        this.genre = genre;
        this.ratings = ratings;
    }
    //function
        //maybe compare with formula fields
    displayName() {
        return this.name + '(' + this.director + '), g: ' + this.genre + ', r: ' + this.ratings;
    }
}


//create new instance. (like creating a new records)
let m1 = new Movie('Interstellar', 'Nolan', 'Sci-fi', 8.5);
console.log('m1:', m1);
console.log(m1.displayName());