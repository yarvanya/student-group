const app = angular.module('myApp', []);

app.controller("groupController", function($rootScope, $scope) {

  $scope.groups = [
      {
        name: "КТ-5",
        students: [
          {fullName: "Ivan Yarymovych", email: "ivan11yarymovych@gmail.com", age: 23},
          {fullName: "Vlad Dzhus", email: "vlad.dzhus@gmail.com", age: 24},
          {fullName: "Natali Kovalchuk", email: "nata@gmail.com", age: 22}
        ]
      },
      {
        name: "АУ-5",
        students: [
          {fullName: "Orest Denyshyn", email: "o.d.@gmail.com", age: 21},
          {fullName: "Slava Shkilnyi", email: "s.s.@gmail.com", age: 24},
          {fullName: "Roma Chychkevych", email: "roma@gmail.com", age: 22}
        ]
      }
  ];

  $scope.newStudent = {};
  $scope.newGroup = {};
  $scope.messageFromStudent = '';
  $scope.messageFromGroup = '';

  $scope.createGroup = function() {
    const assignGroup = Object.assign({}, $scope.newGroup, {students: []});
    $scope.groups.push(assignGroup);
    $scope.messageFromGroup = "You've just successyfly created new group!";
  };

  $scope.createStudent = function(group) {
      group.students.push($scope.newStudent);
      $scope.messageFromStudent = "You've just successyfly created new student!";
      $scope.newStudent = {};
  };

  $scope.clearMessage = function() {
    $scope.messageFromStudent = '';
    $scope.messageFromGroup = '';
  };

  $scope.selectStudent = function(student) {
    $scope.clickedStudent = student;
  };

  $scope.deleteStudent = function(group) {
    group.students.splice(group.students.indexOf($scope.clickedStudent), 1);
    $scope.message = "Student was deleted successfully!";
  };

});
