<div ng-app="GlobalCustomNavigation" ng-controller="ctrMainNavigation">
	<div class="container>
		<ul>
			<li ng-repeat-start="nav in navigations"><a href="{{nav.link}}" target="{{}}">{{nav.displayname}}</a></li>
		</ul>
	</div>
</div>

<script>

	//app
	var app = angular.module("ctrMainNavigation", []);

	//controller Main Navigation js file
	app.controller("ctrMainNavigation", function($scope, $http){
		//get items from SP
		//show items on list
		$http({
			method: "GET",
			url: _spPageContenxtInfo.webAbsoluteUrl + "/_api/web/list/getByTitle('Main Navigation')/items?$select=Title,Display Name, Destination URL,Load In new Tab,Icon",
			headers: {"Accept", "application/json;odata=verbose"}
		}).success(function(data,status,headers,config){
			$scope.navigations = data.d.results;
		}).error(function(data, status, header, config){

		});
		/*$http.get("").then(function(response){
			$scope.navigations = response.data.records;
		});*/
	});
</script>