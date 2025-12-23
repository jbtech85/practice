
// create a user object with 3 properties, Username, Password, and Age
// Username and Password are private fields, can't call with user.username / user.password

// create a couple of symbols
const username = Symbol("username");
const password = Symbol("password");

// user obj
const user = {
  // use symbols as keys
  [username]: "jausche",
  [password]: "1234567",
  age: 27
};

// show up undefined when called directly
console.log(user.username);
console.log(user.password);

// can still see all info when logging entire object though
console.log(user);

// symbol keys don't show up as options
console.log(Object.keys(user));