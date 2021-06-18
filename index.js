let express = require('express');
require('dotenv').config();
let cors = require('cors');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
let studentRoutes = require("./routes/studentRoutes");

const app = express();
const port = 8080;

mongoose.connect("mongodb+srv://mongouser:VQcc3C38HM97TMpU@firstcluster.5orad.mongodb.net/myDb?retryWrites=true&w=majority", {
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true
}).then(res => console.log(`Connection Successful`))
.catch(err => console.log(`Error in DB connection`));

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send('Hello World with Express')
});

app.listen(port, () => {
    console.log(`Application is listening at port ${port}`);
});

app.use('', studentRoutes);