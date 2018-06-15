const GiftService = require('../services/Gift');

const Gifts = {
    create: async (req, res, next) => {
        res.json(await GiftService.add(req.body));
    },
    read: async (req, res, next) => {
        if (req.params.id) {
            const gift = await GiftService.get(req.params.id);
            res.json(gift);
        }
        else {
            const gifts = await GiftService.all(req.query.offset, req.query.limit);
            res.json(gifts);
        }
    },
    delete: async (req, res, next) => {
        res.json(await GiftService.delete(req.params.id));
    },
    
    notify: (req, res, next) => {
        // Send a mail to Santa

    }
}

module.exports = Gifts;