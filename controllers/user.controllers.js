const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.models');

async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;
    try {
        const user = await User.create({ name, email, password });
        return res.render('home');
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

async function handleUserLogin(req, res) {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.render('login', { error: 'Invalid credentials' });
        }
        return res.redirect('/'); // Redirect to homepage after successful login
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    handleUserSignup,
    handleUserLogin
};
