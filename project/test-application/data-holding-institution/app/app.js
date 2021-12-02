/* const FileStore = require('session-file-store')(server_session); /* TEST */
const express = require('express')
const app = express()
const http = require('http')
const path = require('path')
const favicon = require('serve-favicon');
const { serverConfig } = require("./config/configurations");

// View Setting
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));

// Favicon & Static
// app.use(favicon(path.join(__dirname, 'public', 'money.ico')));
app.use('/static', express.static(path.join(__dirname, 'public')))

// Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Request Logging on Console
app.use("/", (req, res) => {
    console.log({
        method: req.method,
        url: req.url
    });
    req.next()
})

require('./routes/route_loader').init(app);

http.createServer(app).listen(serverConfig.port, () => {
    console.log(`app listening at https://localhost:${serverConfig.port}`);
});
