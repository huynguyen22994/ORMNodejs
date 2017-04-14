'use strict';

app.factory('Database', function ($http) {

    return {
        book: {
            GET: () => {
                return $http.get('/api/book');
            },
            POST: (book) => {
                return $http.post('/api/book', book);
            },
            DELETE: (id) => {
                return $http.delete('/api/book/' + id);
            },
            GETONE: (id) => {
                return $http.get('/api/onebook/' + id);
            },
            PUT: (book) => {
                return $http.put('/api/book', book);
            },
            GETBYIDPUB: (id) => {
                return $http.get('/api/booksbyidpub/' + id);
            },
            GETALLINFO: (id) => {
                return $http.get('/api/getAllInfoBook/' + id);
            }
        },
        publisher: {
            GET: () => {
                return $http.get('/api/publisher');
            },
            POST: (publishers) => {
                return $http.post('/api/publisher', publishers);
            },
            DELETE: (idPublisher) => {
                return $http.delete('/api/publisher/' + idPublisher);
            },
            GETONE: (id) => {
                return $http.get('/api/onepublisher/' + id);
            },
            PUT: (publisher) => {
                return $http.put('/api/publisher', publisher);
            }
        }
    }
});