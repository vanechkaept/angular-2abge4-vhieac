import { createReducer, on } from '@ngrx/store';

import { Book } from '../book-list/book.model';
import { retrievedBookList } from './books.action';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { books }) => books)
);