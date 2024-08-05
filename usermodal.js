// const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://govind:govind@govind.qswri9g.mongodb.net/?retryWrites=true&w=majority&appName=govind');

// const userSchema = mongoose.Schema({
//     name:String,
//     username:String,
//     email:String
// });

// module.exports = mongoose.model('user',userSchema);

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://govind:govind@govind.qswri9g.mongodb.net/?retryWrites=true&w=majority&appName=govind');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}