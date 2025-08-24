const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]


function getTheTitles(books){
    let listTitles = [];
    books.forEach(element => {
        listTitles.push(element.title)
        
    });
    return(listTitles);
}
console.log(getTheTitles(books))

/*  .map es la forma mas directa de transformar un array en otro
function getTheTitles(books) {
  return books.map(book => book.title);
} */