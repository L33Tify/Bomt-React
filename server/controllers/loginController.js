const crypto = require('crypto')
const User = require('../models/userSchema')

exports.signup = async (req, res) => {
    try {
        const { email, password } = req.body;
    
        const user = await User.findOne({ email });
        if (user) {
          return res.status(400).json({ message: 'User already exists'});
        }
    
        const salting_word = crypto.randomBytes(32).toString('base64');
        const hash = crypto.createHash('sha256').update(password + salting_word).digest('hex')
    
        const newUser = new User({
          email: email,
          password: hash,
          salting_word: salting_word
        });
    
        await newUser.save();
        res.status(200).json({ message: 'User created successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
};