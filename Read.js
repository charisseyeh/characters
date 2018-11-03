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

var db = firebase.database();

// Do a one time read of our fireboase database.
db.ref('Dedications').once('value').then(function(dataref){
  // Here's the actual data we want.
  var data = dataref.val(); 

  // Each data point is named by (what seems like) a hash of its contents.
  // So lets extract just the contents out.
  var dedications = Object.keys(data).map(function(key){ return data[key]; });

  // We have the data, let's show it on our page.
  show_dedications(dedications);
});

// Let's show the dedications we got from firebase on our page.
function show_dedications(items) {
  var parent = document.getElementById('Dedications');
  items.map(new_dedication_div).forEach(function(elem){
    parent.appendChild(elem);
  });
}

// Return a new div and add contents of |item| in it.
function new_dedication_div(item) {
  console.log(item);
  var div = document.createElement('div');

  var title = document.createElement('p');
  title.appendChild(document.createTextNode(item['Title']));
  div.appendChild(title);

  var pen_name = document.createElement('p');
  pen_name.appendChild(document.createTextNode(item['Pen Name']));
  div.appendChild(pen_name);

  var dedication = document.createElement('p');
  dedication.appendChild(document.createTextNode(item['Dedication']));
  div.appendChild(dedication);

  div.appendChild(document.createElement('br'))
  return div
}


// var db = firebase.firestore();
//
// var loadData = function(){
//         $("#dedication").empty();
//         db.collection("dedication").get().then(dedication => {
//           dedications.forEach(dedication => {
//             $("#dedication").append(JSON.stringify(dedications.data()));
//             $("#dedication").append('<br />');
//           });
//         });
//       }
// $(document).ready(loadData);
//
// console.log(loadData)
