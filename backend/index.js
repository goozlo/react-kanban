const express = require('express');
const { PORT = 3001 } = process.env;
// const mongoose = require('mongoose');

const app = express();

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
}) 