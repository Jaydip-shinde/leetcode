const mongoose = require('mongoose');

async function main() {
    await mongoose.connect("mongodb://localhost:27017/leet-code-1");
}

module.exports = main;


