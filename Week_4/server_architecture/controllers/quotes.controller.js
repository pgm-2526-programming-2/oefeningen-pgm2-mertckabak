const { getData } = require("../utils/file.utils");

function getAllQuotes(req, res) {
  try {
    res.json(getData("quotes.json"));
  } catch (error) {
    res.status(500);
    res.send(`Er ging iets mis: ${error.message} `);
  }
}

function getQuoteById(req, res) {
  //params - komt uit het endpoint , query komt uit het request
  console.log(req.params, req.query);
  const { questionId } = req.params; // const questionId = req.params.questionId;
  //neem quote met ID 3 en geef dit terug

  //neem alle quotes - array
  const allQuotes = getData("quotes.json");

  //controlleren of id bestaat in de array
  const isQuoteInArray = allQuotes.some();

  // zoeken in een array
  const quoteWithId = allQuotes.find((quote) => quote.id === questionId);

  if (questionId) {
    // Response -> resultaat
    res.json(quoteWithId);
  } else {
    res.status(422);
    // res.json(new Error("Quote bestaat niet."));
    throw new Error("Quote bestaat niet.");
  }
}

module.exports = {
  getAllQuotes,
  getQuoteById,
};
