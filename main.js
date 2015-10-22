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

var newFirstnameEntry = ["John", "Erica", "Xavier", "Chloe", "Robert"];
newFirstnameEntry.lol = "you shouldn't be printing this";

var newLastnameEntry = ["Lambert", "Lo", "White", "Nguyen", "Peterson"];
newLastnameEntry.lol = "you shouldn't be printing this";

var newEmailEntry = ["john@test.com", "erica@test.com", "xavier@test.com", "chloe@test.com", "robert@test.com"];
newEmailEntry.lol = "you shouldn't be printing this";

for (var i = newFirstnameEntry.length - 1; i >= 0; i--) {
	var current=data.users.length
	data.users[current]={};
	var a=data.users[current];
	a.username=newUsernameEntry[i];
	a.firstName=newFirstnameEntry[i];
	a.lastName=newLastnameEntry[i];
	a.email=newEmailEntry[i];

	// data.users.push({username:newUsernameEntry[i],
	// 				firstName:newFirstnameEntry[i],
	// 				lastName:newLastnameEntry[i],
	// 				email:newEmailEntry[i]
	// });
	

	// var temp=data.user[current];

};

// TODO: update the object data here with the new entries!

$("#content-placeholder").html(template(data));

