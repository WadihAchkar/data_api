// "npm init -y" To initiate the folder and create a package.json
// "git init" To create a new Git repository
// "npm i express" To enable launching a local server
// "npm i cors" To allow the browser to call the API
// "git add ." To to include in what will be committed
// type "nodemon -v" To make sure the package is installed globally

const express = require("express");
const app = express();
var cors = require("cors");

app.use(cors());

app.get("/", function (req, res) {
  res.send(
    "Delta Media GmbH, Software company in Paderborn, North Rhine-Westphalia"
  );
});

app.get("/DM", function (req, res) {
  var data = [];
  data.push(
    {
    company_name: "Delta Media GmbH",
    url: "https://www.deltamedia.de/",
    services: [
      {
        name: "Internetauftritte",
        description: "Individuell auf jeden Kunden zugeschnitten",
      },
      {
        name: "Online-Shops",
        description: "Direkt und effizient verkaufen",
      },
      {
        name: "Entwicklung von Apps",
        description: "Apps für iOS, Android & Windows Mobile",
      },
      {
        name: "Online-Marketing",
        description: "Zielgruppengerechte Ansprache",
      },
      {
        name: "Extranets und Intranets mit TYPO3",
        description: "Leistungsstark nach außen und innen",
      },
    ],
  });
  res.send(data);
});

app.listen(33100);