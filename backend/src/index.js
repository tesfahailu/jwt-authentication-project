const express = require("express");

require("./database/connection");

(async () => {
  const app = express();
  app.get("/", (req, res, next) => {
    res.send("This worked");
  });
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, console.log(`Server started on port ${PORT}`));
})();
