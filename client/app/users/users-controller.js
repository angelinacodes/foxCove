angular.module('app.users', [])
.controller('Users', ['$scope', '$state', 'Users', function($scope, $state, Users) {

  $scope.signupUser = function (first, last, email, user, pw, pw2) {
    $scope.validated = {
      status:true,
      issues:[]
    }
    if(pw !== pw2) {
      validated.status = false
    }
    if($scope.validated.status){
      $state.go('login')
    }
  }

  $scope.login = function(){
    $state.go('login')
  }

}])