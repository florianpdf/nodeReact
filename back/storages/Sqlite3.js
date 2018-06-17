const sqlite3 = require('sqlite3');
const IStorage = require('./IStorage');

class Sqlite3 extends IStorage {

    constructor(db, table, description) {
        super();
        this.dbConnection = new sqlite3.Database(db);
        this.table = table;

        this.createDB(table, description);
    }

    createDB(name, description) {
        let specs = [];
        for (let key in description) {
            specs = [...specs, `${key} ${description[key]}`];
        }
        
        this.dbConnection.serialize(() => {
            this.dbConnection.run(`CREATE TABLE IF NOT EXISTS ${this.table} (${specs.join(', ')})`);
        });
    }

    add(obj) {
        const columns = Object.keys(obj).join(',');
        const values = Object.values(obj).map(v => `'${v.trim()}'`).join(',');

        // Ex: obj = { name: "firetruck" }
        // columns = [ 'name' ]
        // value = [ "'firetruck'"]
        
        let query = `INSERT INTO ${this.table}(${columns}) values(${values})`;
        this.dbConnection.run(query);

        return this.get;
    }

    get(id) {
        return new Promise((resolve, reject) => {
            let rows = [];
            
            this.dbConnection.get(`select * from ${this.table} where id = ${id}`, (err, row) => {
                if (err) reject(err);
                else resolve(row);
            });
        });
    }

    all(offset = 0, limit = 100) {
        return new Promise((resolve, reject) => {
            this.dbConnection.all(`select * from ${this.table} LIMIT ${offset}, ${limit}`, (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });
    }

    delete(id) {
        this.dbConnection.run(`delete from ${this.table} where id = ${id}`);

        return this;
    }

    /**
     * Transform: {name: 'toto', id: 3}, {name: 'heloise'}, {id: 42}
     * To: SELECT * FROM gifts WHERE (name='toto' AND id=3) OR (name='heloise') OR (id=42)
     * @param {any} stmts 
     */
    query(...stmts) {
        let conditions = []
        
        stmts.forEach((obj => {
            let stmt = [];
            
            for (let key in obj) {
                const value = typeof obj[key] === 'number' ? obj[key] : `'${obj[key]}'`;
                stmt = [...stmt, `${key}=${value}`];
            }

            conditions = [...conditions, stmt.join(' AND ')];
        }));

        const stmt = `SELECT * FROM ${this.table} WHERE ${conditions.map(s => '(' + s + ')').join(' OR ')}`;
        return new Promise((resolve, reject) => {
            let rows = [];
            this.dbConnection.each(stmt, (err, row) => {
                if (err) reject(err)
                else rows = [...rows, row];
            }, () => resolve(rows));
        });
    }
    
}

module.exports = Sqlite3;