console.log("hi varsha");

if(Meteor.isClient){

  Template.leaderboard.events({ 'click': function(){
        console.log("You clicked something");
    }
  });

  Template.leaderboard.helpers({
    'player': function(){
        return PlayersList.find()
    },
    'otherHelperFunction': function(){ 
        return "Some other function"
    }
  });

 }
if(Meteor.isServer){
console.log("Hello Server");
}
PlayersList = new Mongo.Collection('players');

