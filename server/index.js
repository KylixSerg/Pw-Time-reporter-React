import express from "express";


// import external routes
import { router } from "./routes/api.js"

const app = express();
const PORT = 8000;
app.use("/api", router)






//launch server 
app.listen(process.env.PORT || PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT || PORT}...`)
});