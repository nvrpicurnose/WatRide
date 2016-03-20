WatRide.controller('profileviewCtrl', function($scope, ngFB){

	fbLogin = function () {
	    ngFB.login({scope: 'email,publish_actions'}).then(
	        function (response) {
	            if (response.status === 'connected') {
	                console.log('Facebook login succeeded');
	                $scope.getprofile();
	                $scope.loggedIn = true;
	            } else {
	                alert('Facebook login failed');
	            }
	        });
  	};

  	$scope.getprofile = function(){
    	openFB.api({
            path: '/me',
            success: function(data) {
                console.log(JSON.stringify(data));
                document.getElementById("userName").innerHTML = data.name;
                document.getElementById("userPic").src = 'http://graph.facebook.com/' + data.id + '/picture?type=large';
            },
            error: function(err){
            	console.log(err);
            }
       	});
  	};
  	$scope.getprofile();

  	logout = function() {
        openFB.logout(
            function() {
                alert('Logout successful');
	            $scope.loggedIn = false;
            },
            errorHandler);
    };

});