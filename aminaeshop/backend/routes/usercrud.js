const router = require('express').Router();
const bcrypt = require('bcrypt');
let User = require('../modules/users');

async function hashPassword(password){
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
}

router.route("/").get((req, res) => {
    //to find a specific user
    // User.find({name: "Amina Hussein"})
    //to find all the users in the collection
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
    //update a specific user
    //User.update({name: "Amina Hussein"}, $set: { email: "thisismynewemail@gmail.com" })

});

router.route('/add').post(async (req, res) => {
    const username = req.body.name;
    const email = req.body.email;
    var password = req.body.password;
    password = await hashPassword(password);
    //creates a new user and adds it to the database with a hashed password
    const newUser = new User({username, email, password});
    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;