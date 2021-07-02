let express = require('express');
require('dotenv').config();
let cors = require('cors');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const jwt = require('./jwt');
let studentRoutes = require("./routes/studentRoutes");

const app = express();
const port = process.env.PORT;

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@firstcluster.5orad.mongodb.net/${process.env.DB_HOST}?retryWrites=true&w=majority`, {
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true
}).then(res => console.log(`Connection Successful`))
.catch(err => console.log(`Error in DB connection`));

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.use(jwt());


app.get("/", (req, res) => {
    res.send('Hello World with Express')
});

app.listen(port, () => {
    console.log(`Application is listening at port ${port}`);
});

app.use('', studentRoutes);