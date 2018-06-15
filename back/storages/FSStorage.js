const fs = require('fs');
const IStorage = require('./IStorage');

class FSStorage extends IStorage {

    constructor(db, table) {
        super();
        this.dbpath = db;
        this.table = table;
        this.dbConnection = null;

        this.createDB(table);
    }

    createDB(table) {
        const exists = fs.existsSync(this.dbpath);
        let data = {};

        if (!exists)
            this.writeData(data)
        else 
            data = this.getData();
        
        if (!(table in data)) {
            data[table] = [];
            this.writeData(data);
        }
    }

    add(obj) {
        let data = this.getData();
        obj.id = (new Date()).getTime();
        data[this.table] = [...data[this.table], obj];
        this.writeData(data);
    }

    get(id) {
        const data = this.getData();
        const elems = data[this.table];

        for (let i = 0; i < elems.length; i++) {
            if (elems[i].id == parseInt(id)) return Promise.resolve(elems[i]);
        }

        return Promise.resolve({});
    }

    all(offset, limit) {
        const data = this.getData()[this.table];

        return Promise.resolve((data).splice(offset, limit || data.length));
    }

    delete(id) {
        let data = this.getData();
        let elems = data[this.table];
        
        for (let i = 0; i < elems.length; i++) {
            if (elems[i].id === parseInt(id)) {
                elems.splice(i, 1);
                data[this.table] = [...elems];
                this.writeData(data);
                break;
            }
        }
    }

    query(stmt) {
        
    }
    
    getData() {
        return JSON.parse(fs.readFileSync(this.dbpath));
    }

    writeData(data) {
        fs.writeFileSync(this.dbpath, JSON.stringify(data, null, 2));
        return this;
    }
}

module.exports = FSStorage;