const path = require('path');

const GiftsService = require('../services/Gift');
const Sqlite3Storage = require('../storages/Sqlite3');
const FSStorage = require('../storages/FSStorage');

const storage = new Sqlite3Storage(path.resolve('./data/santa.db'), 'gifts', {
    id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
    name: 'VARCHAR(500)'
});
// Other storage available to use, just uncomment
// const storage = new FSStorage(path.resolve('./data/santa.json'), 'gifts');

const service = new GiftsService(storage);


const Gifts = {
    async create (req, res, next) {
        res.json(await service.add(req.body));
    },

    async read (req, res, next) {
        if (req.params.id) {
            const gift = await service.get(req.params.id);
            res.json(gift);
        }
        else {
            const gifts = await service.all(req.query.offset, req.query.limit);
            res.json(gifts);
        }
    },

    async delete (req, res, next) {
        res.json(await service.delete(req.params.id));
    }
}

module.exports = Gifts;