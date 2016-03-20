WatRide.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

  $ionicConfigProvider.tabs.position('bottom');
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.listview', {
    url: '/listview',
    views: {
      'listview': {
        templateUrl: 'directives/listview/listview.html',
        controller: 'listviewCtrl'
      }
    }
  })

  .state('tab.mapview', {
      url: '/mapview',
      views: {
        'mapview': {
          templateUrl: 'directives/mapview/mapview.html',
          controller: 'mapviewCtrl'
        }
      }
    })
  
    .state('tab.profileview', {
      url: '/profileview',
      views: {
        'profileview': {
          templateUrl: 'directives/profileview/profileview.html',
          controller: 'profileviewCtrl'
        }
      }
    });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/mapview');

});
