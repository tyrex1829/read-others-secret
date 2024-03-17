import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

const API_url = "https://secrets-api.appbrewery.com";

app.get("/", async (req, res) => {
    try{
        const result = await axios.get(API_url + "/random");
        res.render("index.ejs", {
            secret: result.data.secret,
            user: result.data.username
        });
    } catch(error){
        console.log(error.response.data);
        res.status(500);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})