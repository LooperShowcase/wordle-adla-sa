const { response } = require("express");
const express = require("express");
const { request } = require("http");
const server = express();
const port = process.env.PORT || 3000;
const theAnswer = "sushi";
server.get("/guess/:word", (request, response) => {
  const userWord = request.params.word;
  let answer = [];
  for (let i = 0; i < userWord.length; i++) {
    const ch = userWord[i];
    if (ch == theAnswer[i]) {
      answer.push(1);
    } else if (theAnswer.includes(ch)) {
      answer.push(0);
    } else {
      answer.push(-1);
    }
  }
  response.json(answer);
});
server.get("/Adla/:name", (request, response) => {
  response.send("Goodbye" + request.params.name);
});

server.use(express.static("public"));
server.listen(port, () => {
  console.log("server is running on port 3000");
});
