const { validator, validationResult } = require('express-validator');
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const config = require('config');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const {printLogger} = require('../core/utility');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
  });
  
exports.signup = async (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty())
        return response.status(400).json({ errors: errors.array() });
        const { name, email, password, contact ,occupation,address} = request.body;
        try {
            let user = await User.findOne({ email });
            if (user) {
              return response.status(400).json({ msg: "already exists" })
            }
            user = new User({ name, email, contact, password,occupation,address });
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
            user.save().then(result => {
              console.log(result);
              

        var mailOptions = {
            from: '"Krashi Sakha 😋"<devikakushwah29@gmail.com>',
            to: result.email,
            subject: 'Registration successful',
            text: 'Registration',
            html: '<b>Welcome !' + result.name + ' to become member of <h3>Krashi Sakha</h3></b>'
          };
  
          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
              printLogger(2, `*********** send mail *************${JSON.stringify(result)}`, 'signup');
              return response.status(200).json({ msg: 'Welcome' + ' ' + result.name });
  
            }
          })
              
            }).catch(err=>{
                console.log(err);
                printLogger(0, `*********** signup *************${JSON.stringify(err)}`, 'signup');
                return response.status(404).json({ msg: 'not saved' });
              })
        }catch(err){
            console.log(err);
            printLogger(4, `***********signup error  *************${JSON.stringify(err)}`, 'signup');
            return response.status(500).json({ msg: 'error find...' });
        }
           
   
}

exports.signin = async (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty())
        return response.status(400).json({ errors: errors.array() });

    // User.findOne({ email: request.body.email, password: request.body.password }).then(result => {
    //     return response.status(200).json(result)
    // }).catch(error => {
    //     return response.status(401).json(error)
    // })
    
    const { email, password } = request.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return response
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return response
          .status(400)
          .json({ errors: [{ msg: 'Invalid Password' }] });
      }

      const payload = {
        user: {
          id: user._id
        }
      };
      console.log(payload);
      
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: '5 days' },
        (err, token) => {
          if (err) throw err;
          response.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      response.status(500).send('Server error');
    }

}