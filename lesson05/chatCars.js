let books = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: 310,
        isFantasy: true
    },
    {
        title: "1984",
        author: "George Orwell",
        pages: 328,
        isFantasy: false
    },
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        pages: 309,
        isFantasy: true
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        pages: 281,
        isFantasy: false
    }
];


for(let titles of books){
    console.log(titles.title)
}
for(let authors of books){
    console.log(authors.author);
}
let fantasy = books.filter(fantasy => fantasy.isFantasy == true)
console.log(fantasy);
let pages300 = books.filter(book => book.pages > 300)
console.log(pages300)

let icon = books.map((sign) => {
    if(sign.isFantasy == true){
        sign.icon = '🐉'
    }
    else{
        sign.icon = '📚'}
    return sign
    })
    console.log(books)
const readingTime = books.map((time) => {
    if(time.pages > 300){
        time.readingTime = 'Long read'
    }
    else{
        time.readingTime = 'Quick read'
    }
    return time
})
console.log(books)
