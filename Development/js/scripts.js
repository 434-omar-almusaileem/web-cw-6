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


let products = [];

let name = prompt("اسم السلعه");

while (name !="انتهيت") {
    let price = prompt("ادخل السعر ");
    let qunatity = prompt("الكمية");

    products.push({name2: name, price2: price, qunatity2: qunatity})

  name = prompt("اسم السلعه")
}
for(l of products ){
    console.log(l.name2+" "+l.price2+" "+l.qunatity2)
}



    
