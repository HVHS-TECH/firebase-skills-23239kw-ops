/**************************************************************
 **************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.      **
 **                                                          **
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");

/**************************************************************/
// helloWorld()
// Demonstrate a minimal write to firebase
// This function replaces the entire database with the message "Hello World"
// 
// This uses the set() operation to write the key:value pair "message":"Hello World"
// The ref('/') part tells the operation to write to the base level of the database "/"
// This means it replaces the whole database with message:Hello World
/**************************************************************/
let user = 'Toe';
let score = 99;
let scoreObject = {
  "Ozempic": 1,
  "Oliver": 44
}
function bludMax(){
  console.log("Running bludMax()")
  firebase.database().ref('/').set(
    {
      game1: {
        users: {
          Tony: 44,
          Tone: 27,
          Tio: 77,
        }
      },
      game2: {
        users: {
          Tony: 2,
          Tone: 5,
          Tio: 3,
        }
      }
    }
  )
}

function foidMax(){
  console.log("Running foidMax()")
  firebase.database().ref('game1/users/' +user).set(score)
}

function clearMessage() {
  firebase.database().ref('game1/users/').set()
}

function simpleRead() {
    console.log("Reading message");
    firebase.database().ref('game1/users').child('Tio').once('value', display, fb_readError);
    console.log("Leaving simpleRead")
    console.log(scoreObject["Ozempic"])
}
function fb_highScoreRead() {
    console.log("Reading High Scores");
    firebase.database().ref('/game1/users').once('value', fb_logDataBase, fb_readError);
    console.log("Leaving highscore read")
}
function fb_logDataBase(snapshot){
    console.log(snapshot.val());
}
function display(snapshot) {
    var dbData = snapshot.val();
    if (dbData == null) { // if there is no data, dbData will be null.
        console.log('No message');
    }
    else {
        console.log("Foid's message is: " + dbData)
    }
}


  function fb_readError(error) {
    console.log("There was an error reading the message");
    console.error(error);
  }


