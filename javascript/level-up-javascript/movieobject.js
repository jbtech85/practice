function Movie(title, genre, director, releaseYear, rating) {
  this.title = title;
  this.genre = genre;
  this.director = director;
  this.releaseYear = releaseYear;
  this.rating = rating;
}

Movie.prototype.getOverview = function() {
  return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`;
}

const EEAAO = new Movie(
  "Everything Everywhere All At Once",
  "Sci-fi",
  "Daniels",
  "2022",
  "10 out of 10"
)

console.log(EEAAO.getOverview());