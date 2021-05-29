const {Pool} = require('pg');
//const {user, host, database, password, port } = require('../../secrets');

const pool = new Pool({
    user: 'node_user',
    host: 'localhost',
    database: 'monstersdb',
    password: 'node_password',
    post: 5432
});



module.exports = pool;