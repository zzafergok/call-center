angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope, $stateParams) {
  $scope.companys = [
    { name:'Akbank', category:'Bank', phone: '444 25 25', img:'/img/akbank.png', id: 0 },
    { name:'Enpara', category:'Bank', phone: '0850 222 3663 ', img:'/img/enpara.png',  id: 1 },
    { name:'Vakif Bank', category:'Bank', phone: '0850 222 0724', img:'/img/vakifbank.png',  id:2 },
    { name:'Garanti', category:'Bank', phone: '444 0 333', img:'/img/garanti.png',  id: 3 },
    { name:'ING', category:'Bank', phone: '0850 222 0 600', img:'/img/ing.png',  id: 4 },
    { name:'Yapi Kredi', category:'Bank', phone: '0850 222 0444', img:'/img/yapikredi.png',  id: 5 }
  ];

  console.log("id : " + $stateParams.companyID);

  if($stateParams.companyID){
    $scope.info = $scope.companys[$stateParams.companyID];
  }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
