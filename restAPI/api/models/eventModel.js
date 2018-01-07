'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;


var EventSchema = new Schema({
    title: {
        type: String,
        required: 'Kindly enter the name of the event'
    },
    type: {
        type: String,
        required: 'Kindly enter the type of the event',
    },
    hostId: {
        type: String,
    },
    isOver: {
        type: Boolean,
    },
    guests: [{
        name: {
            type: String,
            required: 'Guest name is mandatory'
        },
        userId: String,
    }],
    suggestions: [{
        name: String,
        quantity: Number,
        broughtBy: {
            type: [String],
        },
        upvoters: {
            type: [String]
        },
        downvoters: {
            type: [String]
        },
        picture: String,
        details: String,
        suggestedBy: {
            type: String
        }
    }],
    items: [{
        name: String,
        quantity: Number,
        broughtBy: {
            type: [String],
        },
        upvoters: {
            type: [String]
        },
        downvoters: {
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