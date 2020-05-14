var userOne = {

    email: 'ryu@ninjas.com',
    firstName: 'Ryu',
    userName: 'ryushitter89',
    lastName: 'Johnison',
    birthday: '08/14/1988',
    isGay: true,
    login() {
        console.log(this.userName + ' has successfully logged in')
    },
    logout() {
        console.log(this.userName + ' has successfully logged out from email address: ' + this.email)
    }

}


//console.log(userOne);

//console.log(userOne.isGay);



class User {

    constructor(email, firstName, userName, lastName, birthday, isGay) {
        this.email = email,
        this.firstName = firstName,
        this.userName = userName,
        this.lastName = lastName,
        this.birthday = birthday,
        this.isGay = isGay
        this.score = 0;
    }
    login() {
        console.log(`${this.email} has successfully logged in`);
    }
    logout() {
        console.log(`${this.email} has successfully logged out. Have a nice day ${this.firstName}`);
    }
    updateScore() {
        this.score++;
        console.log(this.userName, ' score is now:', this.score);
    }

}


var jerry88 = new User('jerrygags@buttqueef.com','Jerry','jerry88','Schmeikel','03/14/1988',true);
var sally90 = new User('dykebitch90@beaversnatch.net','Sally','sally90','Turdell','04/06/1990',true);
var derl99 = new User('derlfucker@gmail.com','Derly','derl99','Smithson','03/14/1999',true);



