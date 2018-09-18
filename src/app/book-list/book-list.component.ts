import {Component, OnDestroy, OnInit} from '@angular/core';
import {BooksService} from '../services/books.service';
import {Book} from '../models/book';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {faMinus} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

    faMinus = faMinus;
    books: Book[];
    booksSubscription: Subscription;

    constructor(private booksService: BooksService, private router: Router) {
    }

    ngOnInit() {
        this.booksSubscription = this.booksService.booksSubject.subscribe(
            (books: Book[]) => {
                this.books = books;
            }
        );
        this.booksService.emitBooks();
    }

    onNewBook() {
        this.router.navigate(['/books', 'new']);
    }

    onDeleteBook(book: Book) {
        this.booksService.removeBook(book);
    }

    onViewBook(id: number) {
        this.router.navigate(['/books', 'view', id]);
    }

    ngOnDestroy() {
        this.booksSubscription.unsubscribe();
    }
}
