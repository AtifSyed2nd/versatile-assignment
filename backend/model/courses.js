const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
        title: {type: String,
        default: "Title"
        },
        description: String,
        image: String,
        author: String,
        price: String,
        category: String},{
                timestamps: {
                  createdAt: 'created_at', // Use `created_at` to store the created date
                  updatedAt: 'updated_at' // and `updated_at` to store the last updated date
                }
              }
        )

module.exports = mongoose.model('Course', courseSchema)