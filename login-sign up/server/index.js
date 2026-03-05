const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require("./models/Employee")

const app = express()

// middleware
app.use(express.json())
app.use(cors())

// DB connection
mongoose
  .connect("mongodb://localhost:27017/employee")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err))

// REGISTER
app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then(employee => res.json(employee))
    .catch(err => res.status(500).json(err))
})

// LOGIN
app.post("/login", (req, res) => {
  const { email, password } = req.body

  EmployeeModel.findOne({ email: email })
    .then(user => {
      if (!user) {
        return res.json("User not found")
      }

      if (user.password === password) {
        res.json("success")
      } else {
        res.json("Password is incorrect")
      }
    })
    .catch(err => res.status(500).json(err))
})

// SERVER
app.listen(3001, () => {
  console.log("Server is running on port 3001")
})
