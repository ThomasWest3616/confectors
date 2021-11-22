const express = require ('express');

const app = express();

app.use(express.static("public"));

const { createPage } = require("./render.js");

/* Ready the pages */
const frontpagePage = createPage("frontpage/index.html", {
    title: "Confectors | eSport Team"
});

const matchesPage = createPage("matches/matches.html", {
    title: "Confectors | Matches"
});

const teamPage = createPage("team/team.html", {
    title: "Confectors | Team"
});

app.get("/team", (req, res) => {
    res.send(teamPage);
});

app.get("/matches", (req, res) => {
    res.send(matchesPage);
});

app.get("/", (req, res) => {
    res.send(frontpagePage);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
    console.log("Server is running on", PORT);
    
});
