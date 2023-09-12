const express = require('express');
const router = express.Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');

// Registration Page
router.get('/register', (req, res) => {
  res.render('auth/createacct');
});

router.post('/register', async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    res.redirect('/auth/login');
  } catch (error) {
    res.render('auth/createacct', { error });
  }
});

// Login Page
router.get('/login', (req, res) => {
  res.render('auth/login');
});

// Login User
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      req.session.logged_in = true;
      res.redirect('/profile');
    } else {
      res.render('auth/login', { error: 'Invalid email or password' });
    }
  } catch (error) {
    res.render('auth/login', { error });
  }
});

module.exports = router;
