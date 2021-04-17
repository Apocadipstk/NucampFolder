const bicycle = {
    color: 'blue',
    electric: false,
    start() {
        console.log('You crashed the bike');
    }
};
//bicycle.color = 'blue';
//b/icycle.start();

//function hello(name) {
  //  return { studentName: name};
//}

const hello = (name) => ({studentName :name});
//console.log(hello('Aaron'));

class Book {
    constructor(title, author, year, isRed = false) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.isRed = isRed;

    }
}

const book1 = new Book('Steppenwolf', 'Herman Hesse', 1927, true,);
const book2 = new Book('Dune', 'Frank Herbert');

//console.log(book2);

class Audiobook extends Book {
    constructor(title, author, year){
        playAudio() {
            console.log('The audio recording of ${this.title} begins to play.');

        }
    }
   
}
const book4 = new Audiobook('The Martian Chronicles', 'Ray Bradbury', 1950);