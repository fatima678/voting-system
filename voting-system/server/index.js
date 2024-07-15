const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const VotingModel = require('./models/Voting');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://softwarechaser4:software@cluster0.26od2df.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(user => {
    console.log("connected Successfully");
})
.catch(err => {
   console.log(err.message);
});
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    VotingModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("success");
                } else {
                    res.json("incorrect_password");
                }
            } else {
                res.json("invalid_email");
            }
        })
        .catch(err => {
            res.status(500).json("server_error");
        });
});

app.post('/register', (req, res) => {
    VotingModel.create(req.body)
        .then(votings => res.json(votings))
        .catch(err => res.json(err));
});

app.listen(3001, () => {
    console.log("server is running");
});
