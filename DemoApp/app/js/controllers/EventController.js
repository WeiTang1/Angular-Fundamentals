'use strict';
eventsApp.controller("EventController",
function EventController($scope){
 $scope.event={
     name:'Angular Boot Camp',
     date:'1/1/2013',
     time :'10:30 am',
     location:{
         address: "Google Headquarter",
         city:"mountain View",
         province: 'CA'
     },
     imageUrl:'img/angularjs-logo.png',
     sessions:[
         {
             name:'Directives Masterclass',
             creatorName:"Bob Smith",
             duration:"1 hr",
             level:"advanced",
             abstract:"In this session you will learn the ins and outs of directives!"
         },
         {
             name: 'Scopes for fun and profit',
             creatorName:"John Doe",
             duration:"30 mins",
             level:"Introductory",
             abstract:"This session will take a closer look at scopes."
         },
         {
             name:'Well Behaved Controllers',
             creatorName:"John Doe",
             duration:"2 hr",
             level:"Intermediate",
             abstract:"Controllers are the beginning of everything aanguar"
         }
     ]
 }



})