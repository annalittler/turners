require("dotenv").config();
const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");

const bp = require("body-parser");

app.use(cors());
app.use(express.json());

const API_KEY = process.env.API_KEY;
const PORT = 4000;

const headers = {
  headers: {
    "Ocp-Apim-Subscription-Key": API_KEY,
    "Content-Type": "application/json",
  },
};

app.post("/search", async (req, res) => {
  const { query } = req.body;
  console.log(query);
  try {
    // await console.log("hi1;");
    const response = await axios.get(
      `https://api.bing.microsoft.com/v7.0/custom/search?q=${query}&customconfig=ade75262-9b34-4f48-b692-fa28f9a45629&mkt=en-NZ`,
      headers
    );
    console.log(response);
    // res.send(response.data);
    // res.status(200);
  } catch (error) {
    console.log(error);
  }
});

// const searchBing = async (req, res) => {
// };

// app.get("/search", searchBing);
// searchBing();
//
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
