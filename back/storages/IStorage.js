const { NotImplemented } = require('../utils/errors');

// Abstract simmulated class
class IStorage {

    // Interface are not instanciable, but we want to simmulate
    // a thrown error behavior if method are not implemented
    constructor() {
        this._interfaceMethods = ['createDB', 'add', 'get', 'all', 'delete', 'query'];      

        this._interfaceMethods.forEach(method => {
            if (this[method] === undefined) {
                const methodSignature = (this[method + 'Schema'].toString().replace('Schema', '').split('{')[0] || '').trim();
                NotImplemented(methodSignature);
            };
        });
    }

    /**
     * Create a storage table with its description
     * Must be called inside the constructor
     * @param {string} name DB name
     * @param {object} option Storage description
     */
    createDBSchema(name, description) { NotImplemented(); }
    

    /**
     * Add an object to the collection
     * @param {object} obj 
     */
    addSchema(obj) { NotImplemented(); }
    
    /**
     * Get an object from the collection
     * @param {any} identifier 
     */
    getSchema(identifier) { NotImplemented(); }

    /**
     * Query the collection
     * @param {string} queryString 
     */
    allSchema(offset, limit) { NotImplemented() };

    /**
     * Delete an object of the collection
     * @param {any} identifier 
     */
    deleteSchema(identifier) { NotImplemented(); }
    
    /**
     * Query collection
     * @param {any} obj 
     */
    querySchema(obj) { NotImplemented() };
}

module.exports = IStorage;