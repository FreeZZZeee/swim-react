const mongoose = require('mongoose')

const iconSchema = new mongoose.Schema({
    href: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    classFa: {
        type: String,
        required: true,
        lowercase: true
    },
    class: {
        type: String,
        required: true,
        lowercase: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
}, {timestamps: true})

module.exports = mongoose.model('Icon', iconSchema)

// {_id: '1', href: '/#', classFa: 'fa', class: 'fa-facebook'},