const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//ID will be automatically created on MongoDB
const userSchema = new mongoose.Schema({
    name: {type: String, unique: true, trim: true, required: [true, 'Name must be required']},
    email: {type: String, unique: true, trim: true, required: [true, 'Email must be required']},
    password: {
        type: String, 
        trim: true, 
        required: [true, 'Password must be required'], 
        minLength: [6, 'Password must have at least 6 characters']
    }
}, {timestamps: true});

//Before save the user, it will get the recent created user to hash the password
userSchema.pre('save', function(next) {
    let user = this;
    bcrypt.hash(user.password, 10, function(error, hash) {
        if(error) {
            return next(error);
        } else {
            user.password = hash;
            next();
        }
    });
})

const User = mongoose.model('User', userSchema);

module.exports = User;