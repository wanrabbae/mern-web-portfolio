const mongoose = require('mongoose')

const dbURI = process.env.MONGO_ATLAS_URI

mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: true
    }).then((result) => console.log("Connected!!"))
    .catch((err) => console.log("Error, Not Connect!", err))