/**
 * Created by Michal on 5/25/16.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('Comment', {
    email: {
        type: String,
        default: ''
    },
    text: {
        type: String,
        default: ''
    }
});