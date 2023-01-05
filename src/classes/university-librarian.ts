import * as Interfaces from './../interfaces';
import { logger, logMethod, logParameter, sealed, writable } from './decorators';

// interface A {
//     a: number;
// }

// @sealed('UniversityLibrarian') // wth curles because fabric function
// @logger // wo curles because decorator
class UniversityLibrarian implements Interfaces.Librarian/* , A */ {
    name: string;
    email: string;
    department: string;

    // a: number = 1;

    @logMethod
    assistCustomer(@logParameter custName: string, @logParameter bookTitle: string): void {
        console.log(`${this.name} is assisting ${custName} with book ${bookTitle}`);
    }

    // @writable(true)
    assitFaculty(): void {
        console.log('Assisting faculty');
    }

    // @writable(false)
    teachCommunity(): void {
        console.log('Teaching community');
    }
}

export { UniversityLibrarian };