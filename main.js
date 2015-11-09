'use strict'

var source   = $("#some-template").html();
var template = Handlebars.compile(source);


// modify this
var User = function(usernameInput, emailInput) {

    var that = this;

    //private
    var firstName,
        lastName;

    //public
    this.userName = usernameInput;
    this.email = emailInput;


    // do you think this is a good idea? exposing ssn in the user object?
    this.ssn;


    // getters and setters method

    User.prototype.setFirstName = function(firstNameInput) {
        this.firstName = firstNameInput;
        return that;
    };

    User.prototype.getFirstName = function() {
        return this.firstName;
    };

    User.prototype.setLastName = function(lastNameInput) {
        this.lastName = lastNameInput;
        return that;
    };

    User.prototype.getLastName = function() {
        return this.lastName;
    };

    User.prototype.setAge = function(age) {
        this.age = age;
        return that;
    };

    User.prototype.setSsn = function(ssn) {
        this.ssn = ssn;
        return that;
    };




    // complete the function below to return the full name!
    User.prototype.getFullName = function() {
        return this.firstName+" "+this.lastName;
    }

    return this;
}

// modify this to print age and ssn
var printUser = function(user) {
    return {
        username: user.userName,
        fullName: user.getFullName(),
        email: user.email,
        age: user.age,
        ssn: user.ssn
    }
};


// input these entries to data.users but with your User constructor now
// i've given 1 example below for alan

var alan = {username: "alanj", firstName: "Alan", lastName: "Johnson", email: "alan@test.com" };
var allison = {username: "allisonh", firstName: "Allison", lastName: "House", email: "allison@test.com" };
var ryan = {username: "ryanc", firstName: "Ryan", lastName: "Carson", email: "ryan@test.com" };

var usersArray = [];

// set users using your User constructor!
var userAlan = new User(alan.username, alan.email);
userAlan.setFirstName(alan.firstName).setLastName(alan.lastName); //method chaining!
var userAllison= new User(allison.username, allison.email);
userAllison.setFirstName(allison.firstName).setLastName(allison.lastName);
var userRyan= new User(ryan.username, ryan.email);
userRyan.setFirstName(ryan.firstName).setLastName(ryan.lastName);

//try console logging userAlan.firstName or alan.lastName, what do you get?

usersArray.push(userAlan);
usersArray.push(userAllison);
usersArray.push(userRyan);


var newUsernameEntry = ["johnl", "erical", "xavierw", "chloen", "robertp"];

var newFirstnameEntry = ["John", "Erica", "Xavier", "Chloe", "Robert"];

var newLastnameEntry = ["Lambert", "Lo", "White", "Nguyen", "Peterson"];

var newEmailEntry = ["john@test.com", "erica@test.com", "xavier@test.com", "chloe@test.com", "robert@test.com"];

for (var i = newUsernameEntry.length - 1; i >= 0; i--) {
    usersArray.push((new User(newUsernameEntry[i], newEmailEntry[i]))
        .setFirstName(newFirstnameEntry[i])
        .setLastName(newLastnameEntry[i])
        );  
 };


// extra: make PROTOTYPAL function to set and get the age
// extra: make PROTOTYPAL function to set the ssn
// extra: make PROTOTYPAL function and get the ssn of a user but mask the first 5 digits to X
// extra: sort users according to their age
var newAgeEntry = [20, 40, 34, 54, 18, 23, 54, 76];

var newSsnEntry = ["130785381", "729624509", "326025055", "145939832", "398807664", "988520235", "184943737", "877475364"];

var index=0;
newAgeEntry.forEach(function (a) {
    usersArray[index].setAge(a);
    index++;
});

index=0;
newSsnEntry.forEach(function (a) {
    usersArray[index].setSsn(a);
    index++;
});


// do not modify this
var data = {users:[]};
usersArray.forEach( function(userObject) {
    data.users.push(printUser(userObject));
});




$("#content-placeholder").html(template(data));

