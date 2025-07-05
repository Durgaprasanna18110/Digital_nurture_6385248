package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private String librarianName; // Injected via constructor
    private BookRepository bookRepository; // Injected via setter

    // Constructor for constructor injection
    public BookService(String librarianName) {
        this.librarianName = librarianName;
    }

    // Setter for setter injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(String title) {
        System.out.println("Librarian " + librarianName + " is adding book: " + title);
        bookRepository.saveBook(title);
    }
}
