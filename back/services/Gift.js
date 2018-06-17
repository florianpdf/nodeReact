const path = require('path');

class GiftService {
    
    constructor(storage) {
        this.storage = storage;
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


module.exports = GiftService;