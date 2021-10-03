const mongoose = require('mongoose')

const certificateSchema = mongoose.Schema({
    image: {
        type: {
            url: String,
            cloudinary_id: String
        },
        required: true
    }
})

const CertificateModel = mongoose.model('Certificate', certificateSchema)

module.exports = CertificateModel