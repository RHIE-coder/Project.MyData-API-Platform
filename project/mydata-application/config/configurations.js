const path = require('path');
const fs = require('fs');
const multer = require('multer');
const dotenv = require('dotenv');
dotenv.config({ path: path.join(__dirname, '../.env') })

module.exports.serverConfig = {
    port : 3000,
    db_uri: process.env.DB_URL,
    db_name: 'mydata',
}