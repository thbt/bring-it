'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;


var UserSchema = new Schema({
    uuid:{
        type: String,
        required: 'Kindly enter the name of the task'
    },
    nickname: {
        type: String,
        required: 'Kindly enter the name of the task'
    },
    password: {
        type: String,
        required: 'Kindly enter the password of the user',

    },
    email: {
        type: String,
        required: 'Kindly enter the email of the user',
        index: {unique: true}
    },
    profilePicture: {
        type: String,
    },
    credentials: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }

});


/**
 * Function which runs before saving or updating new user
 */
UserSchema.pre('save', function (next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

/**
 * Function which compare the received password to check if it matches
 * @param candidatePassword
 * @param cb
 */
UserSchema.methods.comparePassword = function (candidatePassword, cb) {
    console.log('in comparePassword method');
    console.log(candidatePassword);

    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('Users', UserSchema);