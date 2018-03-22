/**
 * handler - This file defines the main handlers references inside
 * serverless.yml. Only functions exported on this object will be
 * avaliable for use inside the Cloudformation definitions
 */

import createUser from "./src/createUser/handler";

module.exports.createUser = createUser;
