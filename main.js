'use strict'

var source   = $("#some-template").html();
var template = Handlebars.compile(source);

var data = {users: [
  {username: "alan", firstName: "Alan", lastName: "Johnson", email: "alan@test.com" },
  {username: "allison", firstName: "Allison", lastName: "House", email: "allison@test.com" },
  {username: "ryan", firstName: "Ryan", lastName: "Carson", email: "ryan@test.com" }
],
startPartTwo: false};

var newUsernameEntry = ["john", "erica", "xavier", "chloe", "robert"];

var newFirstnameEntry = ["John", "Erica", "Xavier", "Chloe", "Robert"];

var newLastnameEntry = ["Lambert", "Lo", "White", "Nguyen", "Peterson"];

var newEmailEntry = ["john@test.com", "erica@test.com", "xavier@test.com", "chloe@test.com", "robert@test.com"];

// PART I
// TODO: update the object data here with the new entries!
for (var i = 0; i < newUsernameEntry.length; i++) {
    data.users.push({
        username: newUsernameEntry[i],
        firstName: newFirstnameEntry[i],
        lastName: newLastnameEntry[i],
        email: newEmailEntry[i]
    })
}

var newObj = {};

var newArr = [];


data.users[0].forEach(function(alan) {
    console.log(alan);
});

// PART II
// MUST DO PART I before starting PART II
var newAgeField;
var newStateField = [];
var startPartTwo = function() {
    data.startPartTwo = true;
    newAgeField = ["13", "17", "20", "18", "23", "40", "31", "34"];
    var falsy_var;
    newAgeField.lol = "you shouldn't be printing this";
    newAgeField[1000] = falsy_var;
    newStateField[3] = "IL";
    newStateField[4] = falsy_var;
    newStateField[12] = "MO";
    newStateField[20] = falsy_var;
    newStateField[32] = "NY";
    newStateField[35] = "CA";
    newStateField[49] = "CA";
    newStateField[100] = "TX";
    newStateField[1023] = "PO";
    newStateField[2000] = falsy_var;
    newStateField[9999] = "IN";
    newStateField.lol = "you shouldn't be printing this";
}

console.log(newAgeField);
// uncomment the code below to start part 2
startPartTwo();

//TODO: write your code for part 2 here, introduce new age and state property in the data.users array
// must use 2 identical loops only to finish this task
// check these console logs first before starting
// console.log(newAgeField);
// console.log(newStateField);
var indexAge = 0;
newAgeField.forEach(function(ageEntry) {
    console.log(ageEntry);
    if (ageEntry) {
        (data.users[indexAge]).age = ageEntry;
        indexAge++;
    }
});

var indexState = 0;
newStateField.forEach(function(stateEntry) {
    if (stateEntry) {
        (data.users[indexState]).state = stateEntry;
        indexState++;
    }
});


$("#content-placeholder").html(template(data));

