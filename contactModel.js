var mongoose = require('mongoose');
var contactSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    pos: {
        type: String,
        required: true
    },
    pts: {
        type: String,
        required: true
    },
    pim: {
        type: String,
        required: true
    },
    pm: {
        type: String,
        required: true
    },
    s: {
        type: String,
        required: true
    },
    toi: {
        type: String,
        required: true
    },
});
var Contact = module.exports = mongoose.model('contact', contactSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}