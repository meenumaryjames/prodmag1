/**
 * Created by Sony on 11/18/2016.
 */
var app = angular.module('app', ['ngRoute']);
app.run(function ($rootScope) {
    $rootScope.todayDate = (new Date()).getFullYear();
});

app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'homecontroller',
                templateUrl: 'app/partials/default.html'
            })

        .when('/about',
            {
                controller: 'homecontroller',
                templateUrl: 'app/partials/about.html'
            })
        .when('/contact',
            {
                controller: 'homecontroller',
                templateUrl: 'app/partials/contact.html'
            }).when('/products', {
        controller: 'productcontroller',
        templateUrl:'app/partials/prodlist-template.html'
    }).when('/products/:id', {
        controller: 'productcontroller',
        templateUrl:'app/partials/proddetail-template.html'
    }).when('/addNewProduct', {
        controller: 'productcontroller',
        templateUrl:'app/partials/addnewprod-template.html'
    })
        .otherwise({ redirectTo: '/' });
});