const mongoose = require("mongoose")
require("dotenv").config()

const ourENVport = mongoose.connect(process.env.mongo_atlas_url);

module.exports ={ ourENVport }
