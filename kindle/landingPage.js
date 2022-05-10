document.getElementById('welcomeName').innerHTML = sessionStorage.getItem('name');
        document.getElementById('profileImg').src = sessionStorage.getItem('img'); 
        
let authors = [{
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

function renderAuthors(){
    document.getElementById('authorImg1').src = authors[0].img;
    document.getElementById('authorName1').innerHTML = authors[0].author;
    document.getElementById('numOfBooks1').innerHTML = authors[0].numOfBooks;

    document.getElementById('authorImg2').src = authors[1].img;
    document.getElementById('authorName2').innerHTML = authors[1].author;
    document.getElementById('numOfBooks2').innerHTML = authors[1].numOfBooks;

    document.getElementById('authorImg3').src = authors[2].img;
    document.getElementById('authorName3').innerHTML = authors[2].author;
    document.getElementById('numOfBooks3').innerHTML = authors[2].numOfBooks;
}
renderAuthors();

let newBooks = [
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
        bookImg: 'images/books/pride_and_prejudice_book_cover_by_fourblackbirds-d533108-723x1024.png',
        bookName: 'Pride and Prejudice',
        author: 'Jane Austen',
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
];


function renderNewBooks()
{

    document.getElementById('bookImg1').src = newBooks[0].bookImg;
    document.getElementById('bookName1').innerHTML = newBooks[0].bookName;
    document.getElementById('nameOfAuthor1').innerHTML = newBooks[0].author;
    document.getElementById('Category1').innerHTML = newBooks[0].category;

    document.getElementById('bookImg2').src = newBooks[1].bookImg;
    document.getElementById('bookName2').innerHTML = newBooks[1].bookName;
    document.getElementById('nameOfAuthor2').innerHTML = newBooks[1].author;
    document.getElementById('Category2').innerHTML = newBooks[1].category;

    document.getElementById('bookImg3').src = newBooks[2].bookImg;
    document.getElementById('bookName3').innerHTML = newBooks[2].bookName;
    document.getElementById('nameOfAuthor3').innerHTML = newBooks[2].author;
    document.getElementById('Category3').innerHTML = newBooks[2].category;

    document.getElementById('bookImg4').src = newBooks[3].bookImg;
    document.getElementById('bookName4').innerHTML = newBooks[3].bookName;
    document.getElementById('nameOfAuthor4').innerHTML = newBooks[3].author;
    document.getElementById('Category4').innerHTML = newBooks[3].category;

    document.getElementById('bookImg5').src = newBooks[4].bookImg;
    document.getElementById('bookName5').innerHTML = newBooks[4].bookName;
    document.getElementById('nameOfAuthor5').innerHTML = newBooks[4].author;
    document.getElementById('Category5').innerHTML = newBooks[4].category;
}
renderNewBooks();

let lastBooks = [
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
    }
];

function renderLastBooks(){
    document.getElementById('lastBook1').src = lastBooks[0].bookName;
    document.getElementById('lastBookName1').innerHTML = lastBooks[0].name;
    document.getElementById('comment1').innerHTML = lastBooks[0].comment;

    document.getElementById('lastBook2').src = lastBooks[1].bookName;
    document.getElementById('lastBookName2').innerHTML = lastBooks[1].name;
    document.getElementById('comment2').innerHTML = lastBooks[1].comment;

    document.getElementById('lastBook3').src = lastBooks[2].bookName;
    document.getElementById('lastBookName3').innerHTML = lastBooks[2].name;
    document.getElementById('comment3').innerHTML = lastBooks[2].comment;

    document.getElementById('lastBook4').src = lastBooks[3].bookName;
    document.getElementById('lastBookName4').innerHTML = lastBooks[3].name;
    document.getElementById('comment4').innerHTML = lastBooks[3].comment;

    document.getElementById('lastBook5').src = lastBooks[4].bookName;
    document.getElementById('lastBookName5').innerHTML = lastBooks[4].name;
    document.getElementById('comment5').innerHTML = lastBooks[4].comment;

}
renderLastBooks();

const list = document.querySelectorAll('#scrollable');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

list.forEach((item, i) => {
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

