app.controller('ContactController',function($scope,$rootScope){

 $scope.ifSearchUser=false;
 $scope.contacts = [{
    'id' : 0,
  'name' : 'pallvi',
  'email' : 'pallvi@gmail.com',
  'password': 'pallvi',
  'phone' : '911-91-199-999'}]; 

  $scope.clearUser=function(){
 	$scope.contacts=[];
 };

  $scope.addContacts=function(){

$rootScope.Contactlist.push($scope.contacts);
var len=$rootScope.Contactlist.length;
 	for(var i=0;i<len;i++){
 		var res=$scope.contacts.email.localeCompare($scope.Contactlist[i].email);
 		if(res==0&&(len>1)){
 				$rootScope.Contactlist.pop();
       alert("already exists");
 		}
 		else{
 			
 			break;
 		}
 		}
 		
}
   
 };

 
