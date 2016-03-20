WatRide.controller('mapviewCtrl', function($scope, MapFactory){

	$scope.initMap = function(){
        $scope.map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 43.595, lng: -79.702},
          zoom: 9
        });

	};
    google.maps.event.addDomListener(window, 'load', $scope.initMap());

    $scope.$on( "$ionicView.enter", function( scopes, states ) {
        google.maps.event.trigger( $scope.map, 'resize' );
    });

});