const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
const allBooksRented = books.every(book => book.rented > 0);
console.log(allBooksRented);

console.log("Quel est livre le plus emprunté ?");
const mostRentedBook = books.reduce((maxBook, currentBook) => {
    return currentBook.rented > maxBook.rented ? currentBook : maxBook;
});
console.log(mostRentedBook.title);

console.log("Quel est livre le moins emprunté ?");
const leastRentedBook = books.reduce((minBook, currentBook) => {
    return currentBook.rented < minBook.rented ? currentBook : minBook;
});  
console.log(leastRentedBook.title);

console.log("Trouve le livre avec l'ID: 873495 :");
const bookWithId873495 = books.find(book => book.id === 873495);
console.log(bookWithId873495);

console.log("Supprime le livre avec l'ID: 133712 :");
const indexBook133712 = books.findIndex(book => book.id === 133712);
  if (indexBook133712 !== -1) {
    books.splice(indexBook133712, 1);
    console.log("Le livre avec l'ID 133712 a été supprimé.");
  } else {
    console.log("Aucun livre trouvé avec l'ID 133712.");
}

console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé) :")
books.sort((a, b) => a.title.localeCompare(b.title));
console.log(books);


