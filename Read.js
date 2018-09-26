// TODO: Replace with your project's config object. You can find this
// by navigating to your project's console overview page
// (https://console.firebase.google.com/project/your-project-id/overview)
// and clicking "Add Firebase to your web app"
var config = {
    apiKey: "AIzaSyAhDO9Pw_PWtSVTwNvbgEbrDC0RcLmk-ac",
    authDomain: "characters-e23f6.firebaseapp.com",
    databaseURL: "https://characters-e23f6.firebaseio.com",
    storageBucket: "characters-e23f6.appspot.com",
};

// Initialize your Firebase app
firebase.initializeApp(config);

// Reference to your entire Firebase database
var myFirebase = firebase.database().ref();

var db = firebase.firestore();

var loadData = function(){
        $("#dedication").empty();
        db.collection("dedication").get().then(dedication => {
          dedications.forEach(dedication => {
            $("#dedication").append(JSON.stringify(dedications.data()));
            $("#dedication").append('<br />');
          });
        });
      }
$(document).ready(loadData);

console.log(loadData)