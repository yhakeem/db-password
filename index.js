const User = require("./User.js");
const bcrypt = require("bcrypt");

const user = {
  username: "albert",
  password: "bertie99",
};

// YOUR CODE
async function register(username, password) {
  let salt = await bcrypt.genSalt(3);
  const hashedPw = await bcrypt.hash(password, salt);
console.log("this is the king of the hash: ", hashedPw);
  await User.create({ username, password: hashedPw });
}

async function login(username, password) {
    register(username, password)
  const login = await User.findAll({ where: { username } });
  console.log(login[0].password)
  if(!login) {
    return "Failed";
  }

  const passwordsMatch = await bcrypt.compare(password, login[0].password);
  console.log(passwordsMatch);
  if (passwordsMatch){
   return "Success";
  }
  else {
    return "Failed"
  }
}

login("albert", "bertie99")
// DO NOT EDIT BELOW
module.exports = {
  register,
  login,
};
