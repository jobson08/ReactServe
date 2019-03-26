const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//cria uma Schema
const PosteSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Poste = mongoose.model('poste', PosteSchema);
