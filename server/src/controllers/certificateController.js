const CertificateModel = require('../models/CertificateModel')
const {
    cloudinary
} = require('../../config/cloudinary');
const fs = require('fs');


const getOneCertificateContent = async (req, res) => {
    const {
        id
    } = req.params;

    try {
        const certificate = await CertificateModel.findById(id);
        res.status(200).json({
            code: 200,
            status: 'success',
            data: certificate
        });

    } catch (error) {
        res.status(500).json({
            code: 500,
            status: 'failed',
            message: 'Internal server error'
        });
    }
}

const getCertificateContent = async (req, res) => {
    const certificate = await CertificateModel.find({}).sort({_id: -1});

    res.json({
        code: 200,
        status: 'success',
        data: certificate
    });
}

const postCertificateContent = async (req, res) => {

    try {
        const cloudinaryUpload = await cloudinary.uploader.upload(req.file.path);

        const certificate = await CertificateModel.create({
            image: {
                url: cloudinaryUpload.secure_url,
                cloudinary_id: cloudinaryUpload.public_id
            }
        });

        fs.unlinkSync(req.file.path);

        res.status(200).json({
            code: 200,
            status: 'success',
            message: 'Certificate content has been successfully added',
            data: certificate
        });
    } catch (error) {
        res.status(500).json({
            code: 500,
            status: 'failed',
            message: 'Internal server error'
        });
    }
}

const deleteCertificateContent = async (req, res) => {
    const {
        id
    } = req.params

    try {
        const certificate = await CertificateModel.findById(id)

        if (!certificate) {
            return res.status(404).json({
                code: 404,
                status: 'failed',
                message: 'Certificate content not found'
            })
        }

        // Delete image from cloudinary
        await cloudinary.uploader.destroy(certificate.image.cloudinary_id)
        // Delete certificate content
        await certificate.remove()

        res.status(200).json({
            code: 200,
            status: 'success',
            message: 'Certificate content has been successfully deleted'
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            status: 'failed',
            message: 'Internal server error'
        })
    }
}

const updateCertificateContent = async (req, res) => {
    const {
        id
    } = req.params;

    try {
        const certificate = await CertificateModel.findById(id);

        if (!certificate) {
            return res.status(404).json({
                code: 404,
                status: 'failed',
                message: 'Certificate content not found'
            })
        }

        // Delete image from cloudinary
        await cloudinary.uploader.destroy(certificate.image.cloudinary_id)

        // Upload new image to cloudinary
        const cloudinaryUpload = await cloudinary.uploader.upload(req.file.path);

        const updatedCertificate = {
            _id: id,
            image: {
                url: cloudinaryUpload.secure_url,
                cloudinary_id: cloudinaryUpload.public_id
            }
        }

        // Update certificate content
        await certificate.updateOne({
            image: {
                url: cloudinaryUpload.secure_url,
                cloudinary_id: cloudinaryUpload.public_id
            }
        });

        fs.unlinkSync(req.file.path);

        res.status(200).json({
            code: 200,
            status: 'success',
            message: 'Certificate content has been successfully updated',
            data: updatedCertificate
        })

    } catch (error) {
        res.status(500).json({
            code: 500,
            status: 'failed',
            message: 'Internal server error'
        })
    }
}

module.exports = {
    getCertificateContent,
    postCertificateContent,
    getOneCertificateContent,
    deleteCertificateContent,
    updateCertificateContent
}