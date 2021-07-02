const expressJwt = require("express-jwt");
const config = require("./config.json");
const userService = require('./controller/users/studentController');

function jwt() {
    const { secret } = config;
    return expressJwt({ secret, algorithms: ['HS256'] }).unless({
        path: [
           '/login',
           '/createstudents'
        ]
    });
}

module.exports = jwt;