const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: { type: String },
    actor: { type: Schema.Types.ObjectId, ref: 'Actor'},
    description: { type: String}
});

module.exports = mongoose.model('Blog', blogSchema);
