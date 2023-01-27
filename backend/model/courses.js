const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: String,
        description: String,
        image: { type: Buffer, index: { unique: true }},
        author: String,
        price: String,
        category: String},
        )

module.exports = mongoose.model('Course', courseSchema)