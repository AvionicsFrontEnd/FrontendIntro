'use strict'

var source   = $("#some-template").html();
var template = Handlebars.compile(source);

var User = function(usernameInput, firstNameInput, lastNameInput) {

    var that = this;

    //private
    var email;

    //public
    this.userName = usernameInput;
    this.firstName = firstNameInput;
    this.lastName = lastNameInput;

    // do you think this is a good idea? exposing ssn in the user object?
    this.ssn;


    // getters and setters method
    this.setEmail = function(emailInput) {
        email = emailInput;
        return that;
    };

    this.getEmail = function(emailInput) {
        return email;
    };

    // make a function here to return the full name! while preserving the method chaining!



    return this;
}

var printUser = function(user) {
    return {
        username: user.userName,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.getEmail()
    }
};

//try console logging user.email, what do you get?


// set users using your User constructor!
var alan = (new User("alan", "Alan", "Johnson"))
                .setEmail("alan@johnson.com");
var data = {users: [
  printUser(alan),
  {username: "allison", firstName: "Allison", lastName: "House", email: "allison@test.com" },
  {username: "ryan", firstName: "Ryan", lastName: "Carson", email: "ryan@test.com" }
],
startPartTwo: false};

var newUsernameEntry = ["john", "erica", "xavier", "chloe", "robert"];

var newFirstnameEntry = ["John", "Erica", "Xavier", "Chloe", "Robert"];

var newLastnameEntry = ["Lambert", "Lo", "White", "Nguyen", "Peterson"];

var newEmailEntry = ["john@test.com", "erica@test.com", "xavier@test.com", "chloe@test.com", "robert@test.com"];

// input these entries to data.users but with your User constructor now



// extra: make PROTOTYPAL function to set the age and state of user
// extra: sort users according to their age
var newStateEntry = ["CA", "IL", "NY", "MA", "TX", "IL", "PA", "IN"];

var newAgeEntry = [20, 40, 34, 54, 18, 23, 54, 76];




$("#content-placeholder").html(template(data));

