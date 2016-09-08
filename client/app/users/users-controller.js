angular.module('app.users', [])
.controller('Users', ['$scope', '$state', 'Users', function($scope, $state, Users) {

  $scope.signupUser = function (first, last, email, user, pw, pw2) {
    $scope.validated = {
      status:true,
      issues:[]
    }

    var newUser = {
      firstname: first,
      lastname: last,
      email: email,
      username: user,
      password: pw
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

    if(!$scope.validated.status){
      var issues = "";
      $scope.validated.issues.forEach(function(x){
        issues += x + "\n"
      })
      alert('please correct the below issues' + "\n" + issues)
    }

    Users.signup(newUser)
      .then(function(data){
        console.log("RES", data)
        if(data === "user already exists"){
          alert('user already exists, please select another username')
          return;
        }
        else{
          if($scope.validated.status){
            alert('signup successful!');
            $state.go('login');
          }
        }
      })
  }

  $scope.loginUser = function (username, password) {
    console.log("here ")
    if(!username || !password){
      alert('please complete all fields!')
    }
    else{
      Users.login(username, password)
        .then(function(data){
          if(data === "login successful"){
            $state.go('home')
          }
          else{
            alert(data)
          }
        })
    }
  }

}])