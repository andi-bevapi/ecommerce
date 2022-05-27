const bcrypt = require("bcryptjs");

const users = [
    {
        name : "Admin user",
        email : "admin.admin@gmail.com",
        password: bcrypt.hashSync('123456',10),
        isAdmin : true
    },
    {
        name : "first_user",
        email : "first_user.admin@gmail.com",
        password:  bcrypt.hashSync('123456',10),
    },
    {
        name : "second_user",
        email : "second_user.admin@gmail.com",
        password:  bcrypt.hashSync('123456',10),
    }
];

module.exports = users;