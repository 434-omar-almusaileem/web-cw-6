function logger(array) {
    for(let names of array) {
        console.log(names);
    }
}
let names = ["omar","ali"];
logger(names)

let temp = [29,33,37,40]

function hottestDays(name,number){
    for(let play of name) {
        if(play > number)
        console.log(play)
    }
}
hottestDays(temp,35);

function getBookById(books, bookId) {
    for(let omar of books) {
        if (omar.Id==bookId) {
            console.log(omar.book2);
            break;
        } else {
            console.log("undefined")
         }
        }
}



let book1 =[
{book2: "arabic", Id: 1},
{book2: "english", Id: 2},
{book2: "math", Id: 3},
]

getBookById(book1, 2)



    
