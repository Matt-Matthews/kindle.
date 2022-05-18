document.getElementById('welcomeName').innerHTML = sessionStorage.getItem('name'); //display the name of the user on the landing page
document.getElementById('profileImg').src = sessionStorage.getItem('img'); //display the image of the user on the landing page
        
let authors = [{                //this array contains the list of famous authors
    author: 'James Patterson',
    numOfBooks: '16 Books',
    img: 'images/Authors/James-Patterson.jpg'
},
{
    author: 'paulo coelho',
    numOfBooks: '23 Books',
    img: 'images/Authors/paulo-coelho.jpg'
},
{
    author: 'stephen-king',
    numOfBooks: '13 Books',
    img: 'images/Authors/stephen-king.jpg'
}];

function renderAuthors(){               //this function render the list of famous authors
    
    authors.forEach((item, i) => {
        let secondColumn = document.getElementById('second-column');
        let authorRow = document.createElement('div');
        authorRow.classList.add('author-row');
        secondColumn.append(authorRow);
        let img = document.createElement('img');
        img.src = authors[i].img;
        authorRow.append(img);
        let authorDetails = document.createElement('div');
        authorDetails.classList.add('author-details');
        authorRow.append(authorDetails);
        let authorName = document.createElement('a');
        authorName.innerHTML = authors[i].author;
        authorDetails.append(authorName);
        let numOfBooks = document.createElement('p');
        numOfBooks.innerHTML = authors[i].numOfBooks;
        authorDetails.append(numOfBooks);
    });
}
renderAuthors();

let newBooks = [                    //this array contains of the list of new released books
    {
        bookImg: 'images/books/9780618640157_custom-s6-c30-682x1024.webp',
        bookName: 'The Lord of the Rings',
        author: 'J.R.R Tolkien',
        category: "Fantasy"
    },
    {
        bookImg: 'images/books/tumblr_nd4wnpO3ZS1tv8vcro1_r1_1280-682x1024.webp',
        bookName: 'Fahrenheit 451',
        author: 'Ray Bradbury',
        category: 'Mystery'
    },
    
    {
        bookImg: 'images/books/Penguin-2-668x1024.webp',
        bookName: 'The Great Gatsby',
        author: 'FScott Fitzgerald',
        category: 'Mystery'
    },
    {
        bookImg: 'images/books/Hobbit_book-673x1024.webp',
        bookName: 'The Hobbit',
        author: 'J.R.R Tolkien',
        category: 'Fantasy'
    },
    {
        bookImg: 'images/books/pride_and_prejudice_book_cover_by_fourblackbirds-d533108-723x1024.png',
        bookName: 'Pride and Prejudice',
        author: 'Jane Austen',
        category: 'Mystery'
    },
    
    
];


function renderNewBooks()               //this function renders the list of new released books
{

    newBooks.forEach((item, i) =>{

        let bookList = document.getElementById('book-list');
        let bookInfo = document.createElement('div');
        bookInfo.classList.add('book-info');
        bookList.append(bookInfo);
        let bookImg = document.createElement('img');
        bookImg.src = newBooks[i].bookImg;
        bookInfo.append(bookImg);
        let bookName = document.createElement('h3');
        bookName.innerHTML = newBooks[i].bookName;
        bookInfo.append(bookName);
        let nameOfAuthor = document.createElement('p');
        nameOfAuthor.innerHTML = newBooks[i].author;
        bookInfo.append(nameOfAuthor);
        let category = document.createElement('button');
        category.innerHTML = newBooks[i].category;
        bookInfo.append(category);

    });
    

}
renderNewBooks();



let lastBooks = [               //this array contains the list of last read books
    {
        bookName: 'images/books/50-anniversary-cover1-350x564.webp',
        name: 'To kill a morkingbird',
        comment: 'New purchase',
    },
    {
        bookName: 'images/books/71h2sjik5al-_sl1380_-641x1024.webp',
        name: 'The book thief',
        comment: '12 page - 1 chapter - last read',
    },
    {
        bookName: 'images/books/cvr9781416500247_9781416500247_hr-633x1024.webp',
        name: 'Jane Eyre',
        comment: '125 page - 6 chapter - last read',
    },
    {
        bookName: 'images/books/animal_farm_cover2014-620x1024.webp',
        name: 'Animal farm',
        comment: 'New purchase',
    },
    {
        bookName: 'images/books/diary-of-anne-frank-postcard-front_0-662x1024.jpg',
        name: 'Diary of anne frank',
        comment: '217 page - 11 chapter - last read',
    },
    
    
];

function renderLastBooks(lastBooks){                 //this function renders the last read books
    
    lastBooks.forEach((item,i)=>{

        let list = document.getElementById('list');
        let nestedList = document.createElement('li');
        list.append(nestedList);

        let imgCard = document.createElement('div');
        imgCard.classList.add('imgCard');
        imgCard.style.backgroundImage = 'url('+lastBooks[i].bookName+')';
        nestedList.append(imgCard);

        let card = document.createElement('div');
        card.classList.add('card');
        nestedList.append(card);

        let bookRead = document.createElement('div');
        bookRead.classList.add('book-read');
        nestedList.append(bookRead);

        let lastBookImg = document.createElement('img');
        lastBookImg.src = lastBooks[i].bookName;
        bookRead.append(lastBookImg);

        let lastBookName = document.createElement('h3');
        lastBookName.innerHTML = lastBooks[i].name;
        bookRead.append(lastBookName);

        let comment = document.createElement('p')
        comment.innerHTML = lastBooks[i].comment;
        bookRead.append(comment);

    });

}

renderLastBooks(lastBooks);

const list = document.querySelectorAll('#scrollable');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');


list.forEach((item, i) => {             //scrolls the list of last read books
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextBtn.addEventListener('click', () => {
        item.scrollLeft += containerWidth;
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'none';
    });

    prevBtn.addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'block';
    })
    
});


let searchText = document.getElementById('search-input');

let popup = document.getElementById('popup');
let searchedContainer = document.getElementById('searchedContainer');


function searchFunction(){

var counter = 0;
var newCounter = 0;
    
    if(searchText.value==''){
        alert('Please enter the name of a book')
    }else{
        lastBooks.forEach(object =>{
        
            if(object.name.toLowerCase().substr(0,searchText.value.length)        == searchText.value.toLowerCase()){
                
                let searchedbook = document.createElement('div');
                searchedbook.classList.add('searchedbook');
                searchedContainer.append(searchedbook);
    
                let img = document.createElement('img');
                img.src = object.bookName;
                searchedbook.append(img);
    
                let bookName = document.createElement('h3');
                bookName.innerHTML = object.name;
                searchedbook.append(bookName);
                popup.style.display = 'block';
            }
            else{
                counter += 1;
            }
        });

        newBooks.forEach(object =>{
        
            if(object.bookName.toLowerCase().substr(0,searchText.value.length) == searchText.value.toLowerCase()){
                
                let searchedbook = document.createElement('div');
                searchedbook.classList.add('searchedbook');
                searchedContainer.append(searchedbook);
    
                let img = document.createElement('img');
                img.src = object.bookImg;
                searchedbook.append(img);
    
                let bookName = document.createElement('h3');
                bookName.innerHTML = object.bookName;
                searchedbook.append(bookName);
                popup.style.display = 'block';
            }
            else{
                newCounter += 1;
            }
        });

        if(counter == lastBooks.length &&newCounter == newBooks.length){
            alert('No books found');
        }
        
    }
    
}

function closePopup(){
    popup.style.display = 'none';
    searchedContainer.innerHTML = '';
}

searchText.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      searchFunction();
    }
   
  });