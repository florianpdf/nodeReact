const path = require('path');
const Sqlite3Storage = require('../storages/Sqlite3');
const FSStorage = require('../storages/FSStorage');

class GiftService {
    
    constructor() {
        // this.storage = new Sqlite3Storage(path.resolve('./data/santa.db'), 'gifts', {
        //     id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
        //     name: 'VARCHAR(500)'
        // });
        // Other storage system available: 
        this.storage = new FSStorage(path.resolve('./data/santa.json'), 'gifts');
    }
    
    add(gift) {
        return this.storage.add(gift);
    }

    all(offset, limit) {
        return this.storage.all(offset, limit);
    }

    get(id) {
        return this.storage.get(id);
    }

    delete(id) {
        if (typeof id === 'object' && id.id) this.storage.delete(id.id);
        else this.storage.delete(id);
    }
}


module.exports = new GiftService();