const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://group:group@cluster0.njsxd.mongodb.net/krishi?retryWrites=true&w=majority").then(result => {
    console.log("Database has been connected")
}).catch(error => {
    console.log("Unable to connect from database")
})
const adminRouter = require("./routes/admin.routes");
const userRouter = require("./routes/user.router");

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRouter);
//app.use("/user", userRouter);
app.use("/", (request, response) => {
    response.send("Welcome in krishi platform");
})

app.listen(port, () => {
    console.log("server running at port no." + port)
})