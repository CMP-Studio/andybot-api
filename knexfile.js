module.exports = {
    // development: {
        client: "pg",
        version: "9.6.6",
        connection: {
            port: 5432,
            host: "bots.chcahw88vxf8.us-east-2.rds.amazonaws.com",
            database: "bots",
            user: "studio",
            password: "studioadmin",
        },
        migrations: {
            directory: "./db/migrations",
            tableName: "knex_migrations",
        },
        seeds: {
            directory: "./db/seeds",
        }
    // }
};
