const favoriteBooks = [
	"The Hitchhiker's Guide to the Galaxy",
	"1984",
	"To Kill a Mockingbird",
	"The Great Gatsby",
	"Harry Potter and the Sorcerer's Stone",
  ];
  function displayBooks(bookArray) {
	for (let i = 0; i < bookArray.length; i++) {
	  console.log(bookArray[i]);
	}
  }
  displayBooks(favoriteBooks);
  