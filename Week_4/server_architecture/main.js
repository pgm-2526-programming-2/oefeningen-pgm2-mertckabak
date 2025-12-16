const express = require("express");
const { getAllQuotes } = require("./controllers/quotes.controller");
const quotesRouter = require("./routes/quotes.routes");

const app = express();

//app.get("/api/quotes", (req, res) => {
//res.json({
//    data: "Test data",
//  });
//});

//vorige in een apart bestand in een functie steken en dan terug hier ophalen
//app.get("/api/quotes", getAllQuotes); // geen haakjes ? standaard parameters
//worden automatisch doorgegeven

app.use("/api/", quotesRouter);

//Router gebruiken
//router is een collectie van routes

app.listen(8080, "localhost", (err) => {
  if (err) {
    return console.log(err.message);
  }

  console.log("!Server is opgestart en draaiende op http://localhost:8080");
});
