const fs = require("fs");
const path = require("path");

const getUsers = () => {
    const filePath = path.join(__dirname, "../data/users.json");
    return fs.readFileSync(filePath,{encoding:'utf8'});
};

module.exports = getUsers;
