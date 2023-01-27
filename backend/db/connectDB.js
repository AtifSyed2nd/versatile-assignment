const mongoose = require('mongoose');

const connectDB = async(uri) => {
    try {
        const conn = await mongoose.connect(uri)
        console.log(`database is connected at host: ${conn.connection.host}`);
    } catch (error) {
        console.log('error: ' + error);
    }
}

module.exports = connectDB