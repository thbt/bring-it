'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;


var EventSchema = new Schema({

    uuid:{
        type:String,
        required : 'Kindly enter the uuid of the event'
    },
    title: {
        type: String,
        required: 'Kindly enter the name of the event'
    },
    type: {
        type: String,
        required: 'Kindly enter the type of the event',

    },
    isOver: {
        type: Boolean,
    },
    hostId: {
        type: String,
    },
    //guestsId could be made from people who are not save in databases.
    guestsId: {
        type: [String],
    },

    suggestions: {
        type: [String],
    },
    items: [{
        uuid: String,
        name: String,
        thumbsUp: Number,
        thumbsDown: Number,
        quantity: Number,
        broughtBy: {
            type: [String],
        },
        voters: {
            type: [String]
        },
        picture: String,
        details: String,
        suggestedBy: {
            type: String
        }
    }],
    theme: {
        type: String,
    },
    date: {
        type: String,
    },
    location: {
        type: String,
    },
    description: {
        type: String,
    },
    created_date: {
        type: Date,
        default: Date.now
    }

});


module.exports = mongoose.model('Events', EventSchema);