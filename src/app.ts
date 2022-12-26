import { ReferenceItem, UL, RefBook } from "./classes";
import { Category } from "./enums";
import { printRefBook, calcTotalPages, getAllBooks, getBookAuthorByIndex, getBookTitlesByCategory, logBookTitles, logFirstAvailable, setDefaultConfig } from "./functions";
import { Librarian, Logger, TOptions } from "./interfaces";

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++



// >>> Task 2.01 <<<
// console.log(getAllBooks());
// logFirstAvailable(getAllBooks());
// console.log(getBookTitlesByCategory(1));
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
// console.log(getBookAuthorByIndex(2));
// calcTotalPages();

// >>> Task 03.01 <<<
// const myID: string = createCustomerID('Ann', 10);
// console.log(myID);

// let idGenerator: (name: string, id: number) => string;
// let idGenerator: typeof createCustomerID;
// idGenerator = (name: string, id: number) => `${id}/${name}`;
// idGenerator = createCustomerID;

// console.log(idGenerator('Boris', 20));

// >>> Task 03.02 <<<
// createCustomer('Anna');
// createCustomer('Anna', 30);
// createCustomer('Anna', 30, 'Kyiv');

// console.log(getBookTitlesByCategory());
// console.log(logFirstAvailable());

// console.log(getBookById(1));

// let myBooks = checkoutBooks('NoName Customer', ...[1, 2, 4]);
// console.log(myBooks);

// let checkedOutBooks = getTitles(false);
// console.log(checkedOutBooks);

// >>> Task 03.03 <<<
// console.log(getTitles(2, true))
// console.log(getTitles(true))
// console.log(getTitles(false))
// console.log(getTitles(1, false))
// console.log(getTitles('Evan Burchard'))

// >>> Task 03.04 <<<
// console.log(bookTitleTransform('Learn TypeScript'));
// console.log(bookTitleTransform(9876543));

// >>> Task 04.01 <<<
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     // year: 2015,
//     // copies: 3,
//     pages: 200,
//     // markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
//     markDamaged(reason: string) {
//         console.log(`Damaged: ${reason}`);
//     }
// };
// printBook(myBook);
// myBook.markDamaged('missing back cover');

// >>> Task 04.02 <<<
// const logDamage: DamageLogger = (reason: string) => console.log(`Damaged: ${reason}`);
// const logDamage: Logger = (reason: string) => console.log(`Damaged: ${reason}`);
// logDamage('missng some pages');

// >>> Task 04.03 <<<
// const favoriteAuthor: Author = {
//     name: 'Anna',
//     email: 'anna@example.com',
//     numBookPublished: 2
// };

// const favoriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'boris@example.com',
//     department: 'Calssical Literature',
//     assistCustomer: null
// }

// >>> Task 04.04 <<<
// const offer: any = {
//     book: {
//         title: 'Essential TypeScript'
//     },
// };

// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.author?.[0]);

// >>> Task 04.05 <<<
// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(myBook, 'isbn'));

// const ref = new ReferenceItem(1, 'Learn TypeScript', 2022);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'abc group';
// console.log(ref.publisher);
// console.log(ref.getID());

// >>> Task 05.02, 05.03 <<<
// const refBook: Encyclopedia = new Encyclopedia(1, 'Learn TypeScript', 2022, 2);
// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// refBook.printItem();
// console.log(refBook);
// console.log(refBook.getID());
// refBook.printCitation();

// >>> Task 05.04 <<<
// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris', 'Learn TypeScript');
// favoriteLibrarian.a = 2;

// const personBook: PersonBook = {
//     name: 'Anna',
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     email: 'anna@example.com',
//     id: 1,
//     title: 'Unknown'
// }
// console.log(personBook);

// const options: TOptions = { duration: 20 };
// const options2 = setDefaultConfig(options);
// console.log(options);
// console.log(options2);
// console.log(Object.is(options, options2));

// >>> Task 06.03, 06.04 <<<
const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
printRefBook(refBook);

const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
printRefBook(favoriteLibrarian);