angular.module('starter.controllers', [])

//.controller('DashCtrl', function($scope) {})

.controller('DashCtrl', function ($scope, $http, $httpParamSerializerJQLike,$ionicPopup,$window) {
    var user = User.getInstance(); 
    
    $scope.username = user.username;
    $scope.password = user.password;
    $scope.pageClass = 'login';
$scope.login = function(username, password) {
    
   console.log("inside login function");
//$http.get('https://api.mongolab.com/api/1/databases/expensetracker/collections/logins?q={"password":"' + password + '","name":"' + username + '"}&apiKey=mizvFiq83w1JIZ7Xi11R88rg-NkwI_hF').success(function (data) {
 $http.get('https://api.mongolab.com/api/1/databases/expensetracker/collections/users?q={"password":"' + password + '","username":"' + username + '"}&apiKey=mizvFiq83w1JIZ7Xi11R88rg-NkwI_hF').success(function (data) {
        $scope.response = data;
    /* $scope.response = data;
        var alertPopup = $ionicPopup.alert({
                    title: 'Alert',
                    template: 'Logged in Sucessfully'
                });
                alertPopup.then(function (res) {
                });*/
    })
         angular.forEach($scope.response, function (data) {

            if (data.username === username) {
                //ifExist = true;
               
                var alertPopup = $ionicPopup.alert({
                    title: 'Alert',
                    template: 'Logged in Sucessfully'
                });
                alertPopup.then(function (res) {
                });
                
                //$window.alert("logged");
            }
                else {
                    $scope.showAlert = function() {
                    var alertPopup = $ionicPopup.alert({
                    title: 'Alert',
                    template: 'Invalid details'
                });
                alertPopup.then(function (res) {
                });
                    }
                }
        })

   /* $http({
    //https://api.mongolab.com/api/1/databases/expensetracker/collections/logins?q={"password":"nallani","name":"koushik"}&apiKey=mizvFiq83w1JIZ7Xi11R88rg-NkwI_hF
    method: 'POST',
    url : 'https://api.mongolab.com/api/1/databases/expensetracker/collections/logins?apiKey=mizvFiq83w1JIZ7Xi11R88rg-NkwI_hF',
    data: JSON.stringify({
                //type: 'Income',
                name: username,
                password: password,
                //time: {"$date": new Date().toISOString()}
        
            }),
    contentType: "application/json"
}).success(function() {
    $scope.username ="";
    $scope.password ="";
    
    })*/
}
    
})  

.controller('ChatsCtrl', function($scope, $http) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

 // $scope.chats = Chats.all();
   $http.get('https://api.mongolab.com/api/1/databases/expensetracker/collections/logins?apiKey=mizvFiq83w1JIZ7Xi11R88rg-NkwI_hF').
    success(function (data) {
        $scope.response = data;
    }) 
    
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})
/*.controller('AppCtrl', function ($scope,$http) {
    $http.get('https://api.mongolab.com/api/1/databases/expensetracker/collections/logins?apiKey=mizvFiq83w1JIZ7Xi11R88rg-NkwI_hF').
    success(function (data) {
        $scope.response = data;
    });
})*/
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('changeCtrl',function($scope,$http,$httpParamSerializerJQLike,$ionicPopup) {
    var user = User.getInstance(); 
    
    $scope.username = user.username;
    $scope.pageClass='change';
    $scope.change=function(username,opassword,npassword){
       /// $scope.url= 'https://api.mongolab.com/api/1/databases/expensestracker/collections/users?q={"password":"' + opassword + '","username":"' + username + '"}&apiKey=mizvFiq83w1JIZ7Xi11R88rg-NkwI_hF';
        $http({
            method:'PUT',
            url:'https://api.mongolab.com/api/1/databases/expensetracker/collections/users?q={"password":"' + opassword + '","username":"' + username + '"}&apiKey=mizvFiq83w1JIZ7Xi11R88rg-NkwI_hF',
            data: JSON.stringify( { "$set" : { "password" : npassword } } ),
        contentType: "application/json"
        }).success(function() {
    $scope.username ="";
    $scope.opassword ="";
    $scope.npassword="";
             var alertPopup = $ionicPopup.alert({
                    title: 'Alert',
                    template: 'Password Changed'
                });
                alertPopup.then(function (res) {
                });
    })
    
    }
})


//.controller('AccountCtrl', function($scope) {
  .controller('AccountCtrl', function ($scope, $http, $httpParamSerializerJQLike,$ionicPopup) {

    $scope.pageClass = 'register';
    $scope.register = function(firstname,lastname,email,username, password) {
    console.log("inside registration function");
$http({
    method: 'POST',
    url : 'https://api.mongolab.com/api/1/databases/expensetracker/collections/users?apiKey=mizvFiq83w1JIZ7Xi11R88rg-NkwI_hF',
    data: JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                email:email,
                username: username,
                password: password,
                date: new Date().toISOString()
        
            }),
    contentType: "application/json"
}).success(function() {
    $scope.userName ="";
    $scope.password ="";
    $scope.email="";
    $scope.firstname="";
    $scope.lastname="";
    var alertPopup = $ionicPopup.alert({
                    title: 'Alert',
                    template: 'Registered'
                });
                alertPopup.then(function (res) {
                });
    })
}
    
}); 

//});
