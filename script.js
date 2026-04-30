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
function chudMax(){
  console.log("Running chudMax()")
  firebase.database().ref('users/Chud').set(
    {
      message: 'Hello World!',
      age: '22',
    }
  )
}

function foidMax(){
  console.log("Running foidMax()")
  firebase.database().ref('users/Foid').set(
    {
      message: 'Hello World!',
      age: '23',
    }
  )
}

function clearMessage() {
  dbData = null;
}

function simpleRead() {
    console.log("Reading message");
    firebase.database().ref('/').child('message').once('value', display, fb_readError);
    console.log("Leaving simpleRead")
}

function display(snapshot) {
    var dbData = snapshot.val();
    if (dbData == null) {
        console.log('There was no record when trying to read the message');
    }
    else {
        console.log("The message is: " + dbData)
    }
}

  function fb_readError(error) {
    console.log("There was an error reading the message");
    console.error(error);
  }


