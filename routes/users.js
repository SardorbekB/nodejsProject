const express = require('express');
const router = express.Router();
const Joi = require('joi');
const {User} = require('../models/user');
const lodash = require('lodash');
const bcrypt = require('bcrypt');


router.post('/', async(req, res) => {
    const {error} = validateUser(req.body);
    if(error) {
        return res.status(400).send(error.details[0].message);
    }

    let user = await User.findOne({email: req.body.email});
    if(user) {
        return res.send(400).send('Bu foydalanuvchi bazada mavjud');
    }

    user = new User(lodash.pick(req.body, ['name', 'email', 'password']));

    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    res.send(lodash.pick(user, ['_id', 'name', 'email']));
    console.log(user);
});

function validateUser(user) {
    const schema = Joi.object({
        name: Joi.string().required().min(3).max(30),
        email: Joi.string().required().min(5).max(255).email(),
        password: Joi.string().required().min(8).max(1024)
    });

    const result = schema.validate({
        name: user.name,
        email: user.email,
        password: user.password
    });

    return result;
}

module.exports = router;