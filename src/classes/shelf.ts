import { Book, Magazine, ShelfItem } from './../interfaces';

export default class Shelf<T extends ShelfItem> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getFirst(): T {
        return this.items[0];
    }

    find(title: string): T {
        return this.items.find((item: T) => item.title === title);
    }

    printTitles(): void {
        this.items.forEach(item => console.log(item.title));
    }
}

// export class Shelf2 {
//     private items: Book[] | Magazine[] = []; // Array form 'Books' OR 'Magazines'
//     // private items: (Book | Magazine)[] = []; // Mixed array from 'Books' AND 'Magazines'
//     add(item: Book & Magazine): void {
//         this.items.push(item);
//     }
//     getFirst(): Book | Magazine {
//         return this.items[0];
//     }
// }