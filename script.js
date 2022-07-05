'use strict';

const list = document.querySelector('.ul__list');
const btnDiv = document.querySelector('.card__buttons');
const btnNewBook = document.querySelector('.button__new__book');

let mylibrary = [];

function Book(Name, author, pages, read) {
  this.Name = Name;
  this.author = author;
  this.read = Boolean(read);
  this.pages = pages;
}

Book.prototype.changeRead = function () {
  this.read = this.read === false ? true : false;
};

const Harry = new Book('Harry Potter', 'Drogo', 23, false);
console.log(Harry);

const Drazen = new Book('Djoko', 'Kustravica', 55, true);

function addBooktoLibrary(book) {
  mylibrary.push(book);
}

addBooktoLibrary(Harry);
addBooktoLibrary(Drazen);
console.log(mylibrary);

// display objects

const newCard = function () {
  mylibrary.forEach((el) => {
    const newItem = document.createElement('li');
    newItem.classList.add('list__item');

    // Book Name
    const newBookName = document.createElement('p');
    newBookName.classList.add('card__book__name');
    newBookName.textContent = el.Name;

    // Book Author
    const newAuthor = document.createElement('p');
    newAuthor.classList.add('card__book__author');
    newAuthor.textContent = el.author;
    newItem.appendChild(newAuthor);

    // Book Pages
    const newPages = document.createElement('p');
    newPages.classList.add('card__page__number');
    newPages.textContent = el.pages;
    newItem.appendChild(newPages);

    // Read Boolean
    const newRead = document.createElement('button');
    newRead.classList.add('btn');
    newRead.classList.add('card__boolean');
    newRead.textContent = el.read === true ? 'READ' : 'UNREAD';

    // Button Delete
    const btnDelete = document.createElement('button');
    btnDelete.classList.add('btn');
    btnDelete.classList.add('button__delete');
    btnDelete.textContent = 'Delete Book';

    // const divButtons
    const divButtons = document.createElement('div');
    divButtons.classList.add('card__buttons');

    // append

    newItem.appendChild(newBookName);
    newItem.appendChild(newAuthor);
    newItem.appendChild(newPages);
    divButtons.appendChild(newRead);
    divButtons.appendChild(btnDelete);
    newItem.appendChild(divButtons);

    list.appendChild(newItem);
  });
};
