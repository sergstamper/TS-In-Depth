import { createCustomer } from './functions';
import { Author, Book, Person } from './interfaces';

// export type Book = {
//     id: number;
//     title: string;
//     author: string;
//     available: boolean;
//     category: Category;
// };

export type BookProperties = keyof Book | 'isbn';
export type PersonBook = Person & Book;
export type BookOrUndefined = Book | undefined;

export type BookRequiredFields = Required<Book>;
export type UpdatedBook = Partial<Book>;
export type AuthorWoEmail = Omit<Author, 'email'>;
export type CreateCustomerFunctionType = typeof createCustomer;