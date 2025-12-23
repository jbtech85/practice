
class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  get availability() {
    return this.getAvailability();
  }

  get test(){
    return "testing";
  }

  getAvailability() {
    if(this.numCopies === 0) {
      return "Out of stock";
    } else if(this.numCopies < 10) {
      return "Low stock";
    } // else
    return "In stock";
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }

  restock(numCopiesStocked = 10) {
    this.numCopies += numCopiesStocked;
  }
}

class TechnicalBook extends Book {
  // inherit from Book class
  constructor(title, author, ISBN, numCopies, bookEdition) {
    super(title, author, ISBN, numCopies);
    // add 5th argument, edition
    this.bookEdition = bookEdition;
  }

  // new method, getEdition()
    // get current edition returned in template literal
    // `The current version of this book is: ${bookEdition}`
  get edition() {
    return this.getEdition();
  }
    
  getEdition() {
    if(this.bookEdition){
      return `The current version of this book is ${this.bookEdition}`;
    } else {
      return "No edition specified for the selected book";
    }
  }
}

const TechBook1 = new TechnicalBook(
  "JScript",
  "Microsoft",
  "123451235",
  2,
  "First and only edition"
);

console.log('houston');
console.log(TechBook1);

console.log(TechBook1.edition);

console.log(TechBook1.availability);