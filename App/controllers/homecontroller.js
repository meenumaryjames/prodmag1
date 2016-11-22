/**
 * Created by Sony on 11/18/2016.
 */
app.controller('homecontroller', function ($scope,productfactory) {
    $scope.Message = "hello..world";

    var init = function () {
        console.log(productfactory.testMethod());
    }

    init();
});