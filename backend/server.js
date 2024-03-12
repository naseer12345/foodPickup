const express = require('express');
const { ContactRound } = require('lucide-react');
const app = express();
const cors = require('cors');
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cors());
app.listen(3000, () => {
    console.log("server is running at port 3000");
});

app.post('/donatefood', (req, res) => {
    console.log(req.body);
    // Process the request data here
    res.send('Received your donation');
});