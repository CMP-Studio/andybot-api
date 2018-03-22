import knex = require("knex");
// tslint:disable-next-line:no-var-requires
import knexfile = require("../knexfile");
const db = knex(knexfile);
export default db;
