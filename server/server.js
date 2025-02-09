const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5356;

app.use(express.static(path.join(__dirname, "..", "client", "build")));

//app.use(express.static(path.join(__dirname, 'build')));


// users route
app.get('/api', (req, res) => {
  return res.json({
    message: 'Get users route working !!!'
  })
})

//render react app index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
