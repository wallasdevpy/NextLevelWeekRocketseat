import knex from 'knex';
import path from 'path';


const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    },

    useNullAsDefault : true
});



export default connection;

// Migrations = ao hist´rico do banco de dados 


