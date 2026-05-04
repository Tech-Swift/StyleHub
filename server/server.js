const express = require('express');
const cors  = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is running");
});

const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
    console.log(`Server runnning on port ${PORT}`);
});