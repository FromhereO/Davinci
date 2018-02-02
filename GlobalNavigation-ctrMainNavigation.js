<!DOCTYPE html>
<html>
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
<body>

<p>Navigation</p>

<div ng-app="globalNavigationApp" ng-controller="ctrMainNavigation">
<div class="container">
<ul style="display:flex; list-style:none;padding:10px;float:left;">
<li ng-repeat="nav in navigations track by $index"><a href="{{nav.link}}" target="{{}}" style="display: inline;padding: 10px;">
<div ng-if="$index == 0">
    <i class="fa fa-home"></i> 
    {{nav.Name}}</a>, {{nav.City}}, {{nav.Country}}
</div>
<div ng-else>
    {{nav.Name}}</a>, {{nav.City}}, {{nav.Country}}
</div>
</li>
 
</ul>
</div>
</div>


<script>
var globalNavigation = angular.module('globalNavigationApp', []);

//controller Main Navigation js file
globalNavigation.controller("ctrMainNavigation", function($scope, $http){
//get items from SP
//show items on list
$http({
method: "GET",
url: "https://www.w3schools.com/angular/customers.php", 
//_spPageContenxtInfo.webAbsoluteUrl + "/_api/web/list/getByTitle('Main Navigation')/items?$select=Title,Display Name, Destination URL,Load In new Tab,Icon",
headers: '{"Accept", "application/json;odata=verbose"}'
}).then(function(response){
//console.log("Success");
$scope.navigations = response.data.records;
});
});
</script>

</body>
</html>
 
