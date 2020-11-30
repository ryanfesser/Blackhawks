Contact = require('./contactModel');
exports.index = function (req, res) {
    Contact.get(function (err, contacts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Players retrieved successfully",
            data: contacts
        });
    });
};
exports.new = function (req, res) {
    var contact = new Contact();
    contact.first_name = req.body.first_name ? req.body.first_name : contact.first_name;
    contact.last_name = req.body.last_name;
    contact.pos = req.body.pos;
    contact.pts = req.body.pts;
    contact.pim = req.body.pim;
    contact.pm = req.body.pm;
    contact.s = req.body.s;
    contact.toi = req.body.toi;
    contact.save(function (err) {
             res.json({
            message: 'New player created!',
            data: contact
        });
    });
};
exports.view = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            message: 'player details loading..',
            data: contact
        });
    });
};
exports.update = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
        contact.first_name = req.body.first_name ? req.body.first_name : contact.first_name;
        contact.last_name = req.body.last_name;
        contact.pos = req.body.pos;
        contact.pts = req.body.pts;
        contact.pim = req.body.pim;
        contact.pm = req.body.pm;
        contact.s = req.body.s;
        contact.toi = req.body.toi;
        contact.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'player Info updated',
                data: contact
            });
        });
    });
};
exports.delete = function (req, res) {
    Contact.remove({
        _id: req.params.contact_id
    }, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'player deleted'
        });
    });
};