const User = require("./user");

let userlist = [];

function checkTheList(name){
    let found = false;
    console.log(userlist);
    userlist.forEach (item =>{
        if(item.name === name){
            found = true;
        }
    });
    return found;
}

function checkPasswordandUsername(name, password){
    let found = false;
    userlist.forEach(item =>{
        if(item.name === name && item.validatePassword(password)){
            found = true
        }
    });
    return found;
}

function addUser(name, password){
    let user = new User(name,password);
    userlist.push(user);
    console.log(userlist);

}

module.exports = {checkPasswordandUsername, addUser, checkTheList};