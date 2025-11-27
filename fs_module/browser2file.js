const fs = require("fs");
const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public", "index.html"));
});

app.post("/submit", (req, res) => {
    const body = req.body;

    fs.writeFile("backup.txt", JSON.stringify(body) + "\n", (err) => {
        if (err) {
            res.send(err);
        } else {
            res.send("submitted data");
        }
    });
});

app.listen(3000, () => {
    console.log("server listening on port 3000");
});
