showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++

enum Category { JavaScript, CSS, HTML, TypeScript, Angular };

type Book = {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
};

function getAllBooks(): readonly Book[] {
    const books = <const>[
        { id: 1, title: 'Refactoring JavaScript', category: Category.JavaScript, author: 'Evan Burchard', available: false },
        { id: 2, title: 'JavaScript Testing', category: Category.JavaScript, author: 'Liang Yuxian Eugene', available: true },
        { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: false },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.JavaScript, author: 'Andrea Chiarelli', available: false }
    ]

    return books;
}

function logFirstAvailable(books: readonly Book[]): void {
    console.log(`Number of books: ${books.length}`);
    //const title = books.find(book => book.available === true).title;
    const title = books.find(({ available }) => available)?.title;
    console.log(`First available book: ${title}`);
}

function getBookTitlesByCategory(inputCategory: Category): string[] {
    const books = getAllBooks();
    return books
        .filter(book => book.category === inputCategory)
        .map(({ title }) => title);
}

function logBookTitles(titles: Array<string>): void {
    titles.forEach(title => console.log(title));
}

function getBookAuthorByIndex(index: number): [title: string, author: string] { // Tuple!
    const books = getAllBooks();
    const { title, author } = books[index];
    return [title, author];
}

function calcTotalPages(): void {
    const data = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];

    const r = data.reduce((acc: bigint, obj) => {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, 0n);

    console.log(r);
}

function createCustomerID(name: string, id: number): string {
    return `${id}/${name}`;
}

function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);

    if (age) {
        console.log(`Customer age ${age}`);
    }

    if (city) {
        console.log(`Customer city ${city}`)
    }
}

//console.log(getAllBooks());
//logFirstAvailable(getAllBooks());
//console.log(getBookTitlesByCategory(1));
//logBookTitles(getBookTitlesByCategory(Category.JavaScript));
//console.log(getBookAuthorByIndex(2));
//calcTotalPages();

// Task 03.01
// const myID: string = createCustomerID('Ann', 10);
// console.log(myID);

//let idGenerator: (name: string, id: number) => string;
// let idGenerator: typeof createCustomerID;
// idGenerator = (name: string, id: number) => `${id}/${name}`;
// idGenerator = createCustomerID;

// console.log(idGenerator('Boris', 20));

createCustomer('Anna');
createCustomer('Anna', 30);
createCustomer('Anna', 30, 'Kyiv');