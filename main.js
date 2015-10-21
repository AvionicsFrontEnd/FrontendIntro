'use strict'

var source   = $("#some-template").html();
var template = Handlebars.compile(source);

var data = {users: [
  {username: "alan", firstName: "Alan", lastName: "Johnson", email: "alan@test.com" },
  {username: "allison", firstName: "Allison", lastName: "House", email: "allison@test.com" },
  {username: "ryan", firstName: "Ryan", lastName: "Carson", email: "ryan@test.com" }
]};

var newUsernameEntry = ["john", "erica", "xavier", "chloe", "robert"];
newUsernameEntry.lol = "you shouldn't be printing this";
newUsernameEntry[1000] = "Lolz";

var newFirstnameEntry = ["John", "Erica", "Xavier", "Chloe", "Robert"];
newFirstnameEntry.lol = "you shouldn't be printing this";
newFirstnameEntry.length = 666;

var newLastnameEntry = ["Lambert", "Lo", "White", "Nguyen", "Peterson"];
newLastnameEntry[0] = "Lambert";
newLastnameEntry[5] = "Lo";
newLastnameEntry[43] = "White";
newLastnameEntry[99] = "Nguyen";
newLastnameEntry[102] = "Peterson";
newLastnameEntry.lol = "you shouldn't be printing this";

var newEmailEntry = ["john@test.com", "erica@test.com", "xavier@test.com", "chloe@test.com", "robert@test.com"];
newEmailEntry.lol = "you shouldn't be printing this";

// TODO: update the object data here with the new entries!

$("#content-placeholder").html(template(data));

