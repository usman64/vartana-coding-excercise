const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const app = express();

const auth = require("./routes/auth");
const users = require("./routes/users");
const incomeForm = require("./routes/incomeForm");

dotenv.config({ path: "./config/config.env" });

connectDB();

app.use(express.json({ extended: false }));
app.use(express.json()); //body parser middleware

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/income-forms", incomeForm);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode at port ${PORT}`.yellow.bold
  )
);
