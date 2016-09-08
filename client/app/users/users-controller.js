angular.module('app.users', [])
.controller('Users', ['$scope', '$state', 'Users', function($scope, $state, Users) {

  $scope.signupUser = function (first, last, email, user, pw, pw2) {
    $scope.validated = {
      status:true,
      issues:[]
    }
    var args = ['firstname', 'lastname', 'email', 'username', 'password', 'confirm password']
    for(var i = 0; i < arguments.length; i++){
      if(!arguments[i]){
        $scope.validated.status = false;
        $scope.validated.issues.push("missing " + args[i])
      }
    }
    if(pw !== pw2) {
      $scope.validated.status = false
      $scope.validated.issues.push("passwords do not match")
    }

    if($scope.validated.status){
      $state.go('login')
    }
    else{
      var issues = "";
      $scope.validated.issues.forEach(function(x){
        issues += x + "\n"
      })
      console.log($scope.validated.issues, "***", issues)
      alert('please correct the below issues' + "\n" + issues)
    }
  }


}])