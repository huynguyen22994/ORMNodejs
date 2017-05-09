'use strict';

app.controller('HomCtrl', ['$scope', 'Database', '$window', '$http', function($scope, Database, $http) {

   Database.test.POST().then(function(value){
        console.log(value);
    },
    function(err){
        console.log(err);
    })

        // Database.test.GET().then(function(value){
        //     console.log(value);
        // },
        // function(err){
        //     console.log(err);
        // });

        // Database.test.DELETE().then(function(value){
        //     console.log(value);
        // },
        // function(err){
        //     console.log(err);
        // });

        // Database.test.PUT().then(function(value){
        //     console.log(value);
        // },
        // function(err){
        //     console.log(err);
        // })


        // Database.test.TEST().then(function(value){
        //     console.log(value);
        // },
        // function(err){
        //     console.log(err);
        // })



    $scope.choosePub = (name, id) => {
        $scope.dropNotify = name;
        $scope.book.idPub = id;
    };

    $scope.book = {
        id: null,
        title: null,
        author: null,
        ISBN: null,
        idPub: null
    };

    $scope.publisher = {
        name: null,
        address: null,
        phone: null
    };

    $scope.refresh = () => {
        $scope.dropNotify = "Publisher Name";
        Database.book.GET().then((res) => {
            $scope.books = res.data;
        });
        Database.publisher.GET().then((res) => {
            $scope.publishers = res.data;
        });
    };
    
    $scope.deleteBook = (id) => {
        Database.book.DELETE(id).then((res) => {
            $scope.refresh();
        });
    };

    $scope.addBook = () => {
        Database.book.POST($scope.book).then((res) => {
            $scope.dropNotify = "Publisher Name";
            $scope.refresh();
            $scope.clearnBook();
            alert(res.data);
        });
    };

    $scope.getOneBook = (id) => {
        Database.book.GETONE(id).then((res) => {
            $scope.book.id = res.data.id;
            $scope.book.title = res.data.title;
            $scope.book.author = res.data.author;
            $scope.book.ISBN = res.data.ISBN;
        });
    };

    $scope.updateBook = () => {
        Database.book.PUT($scope.book).then((res) => {
            $scope.clearnBook();
            $scope.refresh();
        });
    };

    $scope.clearnBook = () => {
            $scope.book.title = null;
            $scope.book.author = null;
            $scope.book.ISBN = null;
            $scope.book.idPub = null;
    };

    $scope.getBooksbyIdPub = (id) => {
        Database.book.GETBYIDPUB(id).then((res) => {
            $scope.books = res.data;
        });
    };

    $scope.detailBook = (id) => {
        Database.book.GETALLINFO(id).then((res) => {
            $scope.book.title = res.data.title;
            $scope.book.author = res.data.author;
            $scope.book.ISBN = res.data.ISBN,
            $scope.publisher.name = res.data.Publisher.name;
            $scope.publisher.address = res.data.Publisher.address;
            $scope.publisher.phone = res.data.Publisher.phone;
        });
    };

    $scope.refresh();
}]);