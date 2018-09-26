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

// Get a reference to the dedications object of your Firebase.
// Note: this doesn't exist yet. But when we write to our Firebase using
// this reference, it will create this object for us!
var dedications = firebase.database().ref("Dedications");

console.log(dedications);

// Save a new dedicaation to the database, using the input in the form
var submitDedication = function () {

  // Get input values from each of the form elements
  var title = $("#title").val();
  var name = $("#name").val();
  var dedicationText = $("#dedication").val();

  // Push a new dedication to the database using those values
  dedications.push({
    "Title": title,
    "Pen Name": name,
    "Dedication": dedicationText,
    "Date": (new Date()).valueOf()
  });

};
// When the window is fully loaded, call this function.
// Note: because we are attaching an event listener to a particular HTML element
// in this function, we can't do that until the HTML element in question has
// been loaded. Otherwise, we're attaching our listener to nothing, and no code
// will run when the submit button is clicked.
$(window).load(function () {

  // Find the HTML element with the id recommendationForm, and when the submit
  // event is triggered on that element, call submitRecommendation.
  $("#dedicationForm").submit(submitDedication);

});

