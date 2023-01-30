const router = require('express').Router();
const bcrypt = require('bcrypt');
let User = require('../modules/users');

async function hashPassword(password){
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
}

router.route("/").get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post(async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    var password = req.body.password;
    password = await hashPassword(password);
    const newUser = new User({username, email, password});
    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;