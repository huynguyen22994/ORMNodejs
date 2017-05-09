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
        },
        test: {
            POST: function(){
                return $http({
                            url: 'http://localhost:90/api/rating',
                            method: 'POST',
                            headers: {
                                'token':"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Imh1eW5ndXllbiIsInBhc3N3b3JkIjoiOTU4ZjYwZWVjN2Y2MTY2ZTgwYTcwYzRkYWI2N2EyYzUiLCJpZCI6ImVjNmEyMzkzLTFiZGYtNDlkZi05OGRiLWJjN2ZjNTFmMGZhZiIsInJvbGVzIjpbImFkbWluIl0sImlhdCI6MTQ5MjY3MTI5OSwiZXhwIjoxNTI0MjA3Mjk5fQ.4uA9MAHu-wlK6LyvIbIz4kfiSXmX8udPDV5MbZ5z_jU",
                                'Content-Type': 'application/vnd.blackbox.v1+json'
                            }, 
                            data: {
                          curatorId: 'test',
                        projectId: 'aaa',
                        rate: 3
                            }
                        });

            },
            GET: function(){
                return $http({
                    url: 'http://localhost:90/api/vtest',
                    method: 'GET',
                    headers: {
                                'token':"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Imh1eW5ndXllbiIsInBhc3N3b3JkIjoiOTU4ZjYwZWVjN2Y2MTY2ZTgwYTcwYzRkYWI2N2EyYzUiLCJpZCI6ImVjNmEyMzkzLTFiZGYtNDlkZi05OGRiLWJjN2ZjNTFmMGZhZiIsInJvbGVzIjpbImFkbWluIl0sImlhdCI6MTQ5MjY3MTI5OSwiZXhwIjoxNTI0MjA3Mjk5fQ.4uA9MAHu-wlK6LyvIbIz4kfiSXmX8udPDV5MbZ5z_jU",
                                'Content-Type': 'application/vnd.blackbox.v1+json'
                    }
                });
            },
            DELETE: function(){
                return $http({
                    url: 'http://localhost:90/api/vtest',
                    method: 'DELETE',
                    headers: {
                                'token':"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Imh1eW5ndXllbiIsInBhc3N3b3JkIjoiOTU4ZjYwZWVjN2Y2MTY2ZTgwYTcwYzRkYWI2N2EyYzUiLCJpZCI6ImVjNmEyMzkzLTFiZGYtNDlkZi05OGRiLWJjN2ZjNTFmMGZhZiIsInJvbGVzIjpbImFkbWluIl0sImlhdCI6MTQ5MjY3MTI5OSwiZXhwIjoxNTI0MjA3Mjk5fQ.4uA9MAHu-wlK6LyvIbIz4kfiSXmX8udPDV5MbZ5z_jU",
                                'Content-Type': 'application/vnd.blackbox.v1+json'
                    },
                    data: {
                        testId: 'test'
                    }
                });
            },
            PUT: function(){
                return $http({
                    url: 'http://localhost:90/api/vtest',
                    method: 'PUT',
                    headers: {
                                'token':"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Imh1eW5ndXllbiIsInBhc3N3b3JkIjoiOTU4ZjYwZWVjN2Y2MTY2ZTgwYTcwYzRkYWI2N2EyYzUiLCJpZCI6ImVjNmEyMzkzLTFiZGYtNDlkZi05OGRiLWJjN2ZjNTFmMGZhZiIsInJvbGVzIjpbImFkbWluIl0sImlhdCI6MTQ5MjY3MTI5OSwiZXhwIjoxNTI0MjA3Mjk5fQ.4uA9MAHu-wlK6LyvIbIz4kfiSXmX8udPDV5MbZ5z_jU",
                                'Content-Type': 'application/vnd.blackbox.v1+json'
                    },
                    data: {
                        testId: 'test',
                        description: 'đã thay đổi'
                    }
                })
            },
            TEST: function(){
                return $http({
                    url: 'http://localhost:90/api/rating',
                    method: 'POST',
                    headers: {
                                'token':"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Imh1eW5ndXllbiIsInBhc3N3b3JkIjoiOTU4ZjYwZWVjN2Y2MTY2ZTgwYTcwYzRkYWI2N2EyYzUiLCJpZCI6ImVjNmEyMzkzLTFiZGYtNDlkZi05OGRiLWJjN2ZjNTFmMGZhZiIsInJvbGVzIjpbImFkbWluIl0sImlhdCI6MTQ5MjY3MTI5OSwiZXhwIjoxNTI0MjA3Mjk5fQ.4uA9MAHu-wlK6LyvIbIz4kfiSXmX8udPDV5MbZ5z_jU",
                                'Content-Type': 'application/vnd.blackbox.v1+json'
                    },
                    data: {
                        curatorId: 'test',
                        projectId: 'aaa',
                        rate: 3
                    }
                })
            }
        }
    }
});