//const bcrypt = require("bcrypt");

class User{

    constructor(name,password){
        this.name = name;
       // this.salt = bcrypt.genSaltSync(10);
        //this.hash = bcrypt.hashSync(password, salt);
        this.password = password;
    }
    
    validatePassword(password){
       // return hash === bcrypt.hashSync(password, salt);
       return password === password;
    }
}

module.exports = User;