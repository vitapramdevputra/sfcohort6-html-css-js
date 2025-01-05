export default class Movie {
    name;
    director;
    genre;
    ratings;

    constructor(name, director, genre, ratings) {
        this.name = name;
        this.director = director;
        this.genre = genre;
        this.ratings = ratings;
    }
    displayName() {
        return this.name + '(' + this.director + '), g: ' + this.genre + ', r: ' + this.ratings ;
    }
}
