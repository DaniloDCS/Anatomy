const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/views/', express.static("views"));
app.use('/images/', express.static("images/"));
app.use('/public/', express.static("public/"));
app.use('/angular/', express.static("node_modules/angular"));
app.use('/angular-route/', express.static("node_modules/angular-route"));
app.use('/fontawesome/', express.static("node_modules/@fortawesome/fontawesome-free/"));

app.get('/', (req, res) => {
  return res.sendFile(__dirname + "/index.html");
})

app.listen(3000, () => {
  console.log("Server started");
});
