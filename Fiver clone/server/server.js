const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const fivermodel = require("./models/Fiver");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/fiver")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(`something is wrong ${err}`));

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  fivermodel.create(req.body)
  .then(fivers => res.json(fivers))
  .catch(err => res.json(err))
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  fivermodel.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.json("User not found");
      }

      if (user.password === password) {
        res.json("success");
      } else {
        res.json("the password is incorrect");
      }
    })
    .catch((err) => res.json(err));
});

app.use("/api/gigs", gigRoutes);




app.listen(3001, () => {
  console.log("Server is running");
});
