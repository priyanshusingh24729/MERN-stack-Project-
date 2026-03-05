const express = require("express");
const gigmodel = require("./models/Gig")


const router = express.Router();

/* CREATE GIG */
router.post("/", async (req, res) => {
  try {
    const gig = new Gig({
      userId: req.body.userId, // temporary (auth later)
      title: req.body.title,
      desc: req.body.desc,
      price: req.body.price,
      category: req.body.category,
    });

    await gig.save();
    res.status(201).json(gig);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* GET GIGS */
router.get("/", async (req, res) => {
  try {
    const gigs = await Gig.find();
    res.json(gigs);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
