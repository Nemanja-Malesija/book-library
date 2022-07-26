Book library project

Project realised using constructor function so that every time an user submits data form a new object is created and pushed into new array. The array is then looped over and the data is displayed in the form of book cards.

Important take away:
Demonstration that DOM is indeed a separate object:
I created the function to create and push new objects to the array using forEach method. This created a bug when displaying items in the DOM:
Every time a new object would be pushed to the array Mylibrary, console.log would confirm that there is indeed +1 object in the array. The problem was, having used forEach method to display objects, DOM would always display every item, every time (if 1 + 1 objects in the array, there would be 2 items displayed). To fix this, the DOM object needed to accesed separately in order to delete extra items.

Had fun refactoring code with inner.html and using closures to create callback functions.

UPDATE:
Refactored the code using classes. Separated the logic into two classes: Book class and Library class. Inside of Library class resides most of the logic. This is where new Book object is being created when form is submited, and this is also where this object gets pushed into the library array, which is defined as a private property of the class. The challenging part of this refactoring process was to understand that, when refactoring, we should be extremely careful with the this keywoard, even more so when calling a function as a callback inside of an event listener. In this case, we should use bind method to bind the this keywoard to the current object.
