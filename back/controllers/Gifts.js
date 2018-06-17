const GiftService = require('../services/Gift');

const Gifts = {
    async create (req, res, next) {
        res.json(await GiftService.add(req.body));
    },

    async read (req, res, next) {
        if (req.params.id) {
            const gift = await GiftService.get(req.params.id);
            res.json(gift);
        }
        else {
            const gifts = await GiftService.all(req.query.offset, req.query.limit);
            res.json(gifts);
        }
    },

    async delete (req, res, next) {
        res.json(await GiftService.delete(req.params.id));
    }
}

module.exports = Gifts;