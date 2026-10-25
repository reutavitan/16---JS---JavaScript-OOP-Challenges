
class MediaItem {
    constructor(title, year, genre) {
        this.title = title;
        this.year = year;
        this.genre = genre;
    }

    getSummary() {
        return `${this.title} (${this.year}), Genre: ${this.genre}`;
    }
}

class Book extends MediaItem {
    constructor(title, year, genre, author, pageCount) {
        super(title, year, genre);
        this.author = author;
        this.pageCount = pageCount;
    }

    getSummary() {
        return `Book: '${this.title}' by ${this.author}, ${this.pageCount} pages`;
    }
}

class Movie extends MediaItem {
    constructor(title, year, genre, director, durationMinutes) {
        super(title, year, genre);
        this.director = director;
        this.durationMinutes = durationMinutes;
    }

    getSummary() {
        return `Movie: '${this.title}' directed by ${this.director}, ${this.durationMinutes} min`;
    }
}
class Library {
    constructor() {
        this.MediaItem = [];
}
        addItem(item)
        {
            this.MediaItem.push(item)
        }
        search(term)
        {
            term = term.toLowerCase();
            return this.MediaItem.filter(item => item.title.toLowerCase().includes(term))

        }
        listByGenre(genre)
        {
            return this.MediaItem.filter(item => item.genre == genre)
        }

    
}
const lib = new Library();

lib.addItem(
    new Book("Dune", 1965, "Sci-Fi", "Frank Herbert", 412)
);

lib.addItem(
    new Movie("Dune", 2021, "Sci-Fi", "Denis Villeneuve", 155)
);

console.log(lib.search("dune"));
console.log(lib.listByGenre("Sci-Fi"));