/**
 * Created by Sony on 11/18/2016.
 */
app.controller('productcontroller', function ($scope, $routeParams, $location, productfactory, logservice) {
    $scope.products = [];
    $scope.selectedProduct = null;
    $scope.newProductModel = {};
    var init = function () {
        //productFactory.testMethod();

        $scope.products = productfactory.getProducts();

        if ($routeParams.id != null && $routeParams.id != undefined) {
            $scope.selectedProduct = productfactory.getProductById($routeParams.id);
        }
    }
    init();

    $scope.saveProduct = function () {
        productfactory.addProduct($scope.newProductModel);
        logservice.logMe('Product is Saved...');
        $location.path('/products');
    }
});