WatRide.controller('listviewCtrl', function($scope, ngFB, TripFactory, $ionicModal){

	get_feed = function(){
        $scope.refined_trips = [];
      	openFB.api({
	          path: "/372772186164295/feed",
	          success: function(data){
	            var raw_trips = data.data;
                for(var rt = 0; rt<raw_trips.length; rt++){
                    var refined_trip = TripFactory.parseTrip(raw_trips[rt]);
                    console.log(refined_trip);
                    $scope.refined_trips.push(refined_trip);
                    $scope.$apply(function(){});
                }
	          },
	          error: function(err){
	          	console.log("please log in first");
	          }
    	});
    };

    $scope.$on( "$ionicView.enter", function( scopes, states ) {
        get_feed();
    });

    // sets the selected trip
    $scope.set_selected_trip = function(trip){
    	TripFactory.set_selected_trip(trip);
    };

    // loads more trips
    loadMoreTrips = function(){

    };

		// ========= MODAL Filter ========== //

        $ionicModal.fromTemplateUrl('modals/trip-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal){
            $scope.TripModal = modal;
        });

        $scope.openTripModal  = function(trip){
        	$scope.selTrip = trip;
            $scope.TripModal.show();
        };
        $scope.closeTripModal = function(){
            $scope.TripModal.hide();
        };
        // Execute action on hide modal
        $scope.$on('TripModal.hidden', function(){
            console.log('hiding TripModal');
        });



});