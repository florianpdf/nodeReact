const MailService = require('../services/Mail');

const Mails = {
    async send(req, res) {
        const success = await MailService.send(req.body.to, req.body.message);
        res.json(success);
    }
};

module.exports = Mails;