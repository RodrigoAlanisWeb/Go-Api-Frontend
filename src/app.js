const express = require("express");
const morgan = require("morgan");
const hbs = require("express-handlebars");
const path = require("path");

const app = express();

// Middlewares
app.use(morgan("dev"))
app.use("/styles", express.static(path.join(__dirname + "/scss")));
app.use(express.urlencoded({extended: false}))

// Settings
app.set("port", process.env.PORT || 5000);
app.set("views", path.join(__dirname, 'views'))
app.engine(".hbs", hbs({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    extname: '.hbs',
    defaultLayout: 'main',
}));
app.set('view engine','.hbs');

// Routers

app.use(require('./routes'))

// Start The Server
app.listen(app.get("port"),() => {
    console.log("Server On Port " + app.get("port"));
})