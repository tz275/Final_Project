const mongo = require('mongoose')

const postSchema = new mongo.Schema({
    start_date: {type: Date, required: true},
    end_date: {type: Date, required: true},
    price: {type: Number, required: true},
    description: String,
    img_urls: [String],
    email: {type: String, required: true, lowercase: true},
})

module.exports = mongo.model("Post", postSchema)