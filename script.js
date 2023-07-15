const switchBtn = document.querySelector('.switch');
const toggle = document.getElementById('toggle');
const addBtn = document.getElementById('addBtn');
const prompt = document.querySelector('.prompt');
const close = document.getElementById('cross');
const submit = document.getElementById('submit');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const readCheckBoxInput = document.getElementById('readCheckBox');
const shelf =document.getElementById('shelf');

const root = document.documentElement;

toggle.addEventListener('click', () => {
    switchBtn.classList.toggle('darkMode');
    root.classList.toggle('dark');
});
addBtn.addEventListener('click', () => {
    prompt.style.display = "flex";
});
close.addEventListener('click', () => {
    prompt.style.display = "none";
});

function book(title, author, pages, isRead) {
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.isRead = isRead

}

submit.addEventListener('click', () => {
    const bookItem =new book(titleInput.value, authorInput.value, pagesInput.value, readCheckBoxInput.checked);
    let Read='not read';
    let readEnabled;
    if (bookItem.isRead) {
        Read='read';   
        readEnabled="readEnabled" ;   
    }
    bookArr.push(bookItem);
    console.log(bookArr);
    prompt.style.display = "none";
    const div = document.createElement('div');
    div.classList.add('cards');
    div.innerHTML=`<div class="label" id="titleDisplay"><h4>${bookItem.title}</h4></div>
    <div class="label" id="authorDisplay"><h4>~ ${bookItem.author}</h4></div>
    <div class="label" id="pagesDisplay"><h4>${bookItem.pages} pages</h4></div>
    <div class="read label" id="read"><h4>${Read}</h4></div>
    <div class="remove label" id="remove"><h4>remove</h4></div>`;
    shelf.appendChild(div);
    document.getElementById('read').classList.add(`${readEnabled}`);
    document.getElementById('read').addEventListener('click', ()=> {
        document.getElementById('read').classList.toggle('readEnabled');
    });
});

let bookArr = [];

book.prototype.info = function () {
    for (let key in this) {
        console.log(`${key} is : ${this[key]}`);
    }
};

console.log(bookArr);