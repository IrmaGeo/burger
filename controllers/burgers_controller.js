const express = require("express")
const burger = require("../models/burger.js")

// Create the router for the app, 
var router = express.Router()


router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hdbrsObj = {
            burgers: data
        }
        res.render("index", hdbrsObj);
    });

    router.post("/api/burgers", function (req, res) {
        burger.insertOne(
            ["burger_name"],
            [req.body.burger_name],
            function (result) {
                res.json({ id: result.insertId })
            });
    });

    router.put("/api/burgers/:id", function (req, res) {
        var condition = "id =" + req.params.id;
        burger.updateOne({ devoured: req.body.devoured }, condition, function (result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        })
    });
    router.delete("/api/burgers/:id", function (req, res) {
        var condition = "id =" + req.params.id;
        burger.deleteOne(condition, function (result) {
            res.json(result)

        })
    });
});
// and export the router at the end of your file.
module.exports = router;