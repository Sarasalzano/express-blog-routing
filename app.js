const express = require("express");
const app = express();
const port = 3000;

//import router dei post
const postsRouter = require('./routers/postsRouter');

//registro il router con la rotta posts
app.use("/posts", postsRouter)

//avvio il server sulla porta 3000
app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});