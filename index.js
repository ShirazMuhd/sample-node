
// index.js - entry point: starts the server using the app from app.js
const app = require("./app");
 
const PORT = process.env.PORT || 5000;
 
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Some of the Sample Changes brought to in the remote repo
