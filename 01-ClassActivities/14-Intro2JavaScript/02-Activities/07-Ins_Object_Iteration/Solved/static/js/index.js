const userInfo = {
  name: "Eric",
  age: 32,
  location: "North America"
};

// Use `Object.values` and `forEach` to iterate through keys
Object.keys(userInfo).forEach(key => console.log(key));

// Use `Object.values` and `forEach` to iterate through values
Object.values(userInfo).forEach(value => console.log(value));

console.log(Object.entries(userInfo));

// Use `Object.entries` and `forEach` to iterate through keys and values
// the [key, value] parameter is using assignment destructuring in javascript, 
// which is the same as unpacking a dictionary into key/value pairs in python
Object.entries(userInfo).forEach(([key, value]) => console.log(`Key: ${key}, Value: ${value}`));


// Array of objects
const users = [
  { name: "Eric", age: 32, location: "North America" },
  { name: "Sally", age: 23, location: "Europe" },
  { name: "Cassandra", age: 27, location: "North America" }];

// Loop through array of objects then each object
users.forEach(user => {
  console.log(user);
  // Get the entries for each object in the array
  // Log the key and value
  Object.entries(user).forEach(([key, value]) => console.log(`Key: ${key}, Value: ${value}`));
});

users.forEach(user => Object.entries(user).forEach(([key, value]) => console.log(`Key: ${key}, Value: ${value}`)));