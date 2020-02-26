module.exports = function(app) {
    var controller = require('../controller/controller');

    app.route('/getAccessToken').post(controller.getAccessToken);
    app.route('/getProfile').get(controller.getData);
}
