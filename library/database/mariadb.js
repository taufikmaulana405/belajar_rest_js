const mariadb = require("mariadb");

/**
 * Creates a connection pool for MariaDB database.
 * @param {Object} options - The options for the connection pool.
 * @param {string} options.host - The host of the database.
 * @param {string} options.user - The username for the database.
 * @param {string} options.password - The password for the database.
 * @param {number} options.connectionLimit - The maximum number of connections to create at once.
 * @returns {Object} - The connection pool object.
 */
const poolmariadb = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    connectionLimit: 10
});

module.exports = {
    /**
     * Executes a query to the MariaDB database.
     * @returns {object} The connection pool object.
     */
    pool: poolmariadb,
    /**
     * Executes a query to the MariaDB database.
     * @async
     * @param {string} query - The query to execute.
     * @param {Array} values - The values to be inserted into the query.
     * @returns {object} The result of the query.
     * @throws {Error} - The error thrown by the query.
     */
    query: async (query, values) => {
        let err;
        let result;
        const conn_mariadb = await poolmariadb.getConnection();
        try {
            if (!values) result = await conn_mariadb.query(query);
            else result = await conn_mariadb.query(query, values);
        } catch (error) {
            err = error;
        }
        conn_mariadb.end();
        if (result) return result;
        if (err) throw err;
    }
};