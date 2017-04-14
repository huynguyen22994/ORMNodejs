'use strict';

app.controller('PublisherCtrl', ['$scope', 'Database', function($scope, Database) {

    $scope.publisher = {
        idPub: null,
        name: null,
        address: null,
        phone: null
    };

    $scope.refresh = () => {
        Database.publisher.GET().then((res) => {
            $scope.publishers = res.data;
        });
    };
    
    $scope.deletePublisher = (id) => {
        Database.publisher.DELETE(id).then((res) => {
            $scope.refresh();
        });
    };

    $scope.addPublisher = () => {
        Database.publisher.POST($scope.publisher).then((res) => {
            $scope.refresh();
            $scope.clearnPublisher();
            alert(res.data);
        });
    };

    $scope.getOnePublisher = (id) => {
        Database.publisher.GETONE(id).then((res) => {     
            $scope.publisher.idPub = res.data.idPub;
            $scope.publisher.name = res.data.name;
            $scope.publisher.address = res.data.address;
            $scope.publisher.phone = res.data.phone;
        });
    };

    $scope.updatePublisher = () => {
        Database.publisher.PUT($scope.publisher).then((res) => {
            $scope.clearnPublisher();
            $scope.refresh();
        });
    };

    $scope.clearnPublisher = () => {
        $scope.publisher.idPub = null;
        $scope.publisher.name = null;
        $scope.publisher.address = null;
        $scope.publisher.phone = null;
    };

    $scope.refresh();
}]);