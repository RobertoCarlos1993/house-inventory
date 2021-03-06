require("dotenv").config();
const app = require("../server");

app
  .listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
  })
  .on("error", err => {
    console.log("ERROR: ", err);
  });
