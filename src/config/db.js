const mongoose = require('mongoose');

async function connectDb() {
    const uri = process.env.MONGO_URI;

    if (!uri) {
        throw new Error('Missing required env var: MONGO_URI (see .env.example)');
    }

    await mongoose.connect(uri, {
        autoIndex: true,
    });

    return mongoose.connection;
}

module.exports = {
    connectDb,
};
