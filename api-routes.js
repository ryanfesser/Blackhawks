let router = require('express').Router();
router.get('/', function (req, res) {
    res.json({
        status: 'API Working',
        message: 'Blackhawks for life!!',
    });
});
var contactController = require('./contactController');
router.route('/blackhawks')
    .get(contactController.index)
    .post(contactController.new);
router.route('/blackhawks/:players')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);
module.exports = router;