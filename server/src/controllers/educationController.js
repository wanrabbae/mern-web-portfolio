const EducationModel = require('../models/EducationModel');


const getEducationContent = async (req, res) => {
    const education = await EducationModel.find()

    res.json({
        code: 200,
        status: 'success',
        data: education
    });
}

const postEducationContent = async (req, res) => {
    const {
        title,
        school,
        city,
        startDate,
        endDate,
    } = req.body;

    const education = new EducationModel({
        title,
        school,
        city,
        startDate: new Date(startDate).toDateString(),
        endDate: new Date(endDate).toDateString(),
    });

    try {
        await education.save();

        res.status(200).json({
            code: 200,
            status: 'success',
            message: 'Education content has been successfully added'
        });
    } catch (error) {
        res.status(500).json({
            code: 500,
            status: 'failed',
            message: 'Internal server error'
        });
    }
}

const deleteEducationContent = async (req, res) => {
    const {
        id
    } = req.params

    try {
        const education = await EducationModel.findById(id)

        if (!education) {
            return res.status(404).json({
                code: 404,
                status: 'failed',
                message: 'Education content not found'
            })
        }

        await education.remove()

        res.status(200).json({
            code: 200,
            status: 'success',
            message: 'Education content has been successfully deleted'
        })

    } catch (error) {
        res.status(500).json({
            code: 500,
            status: 'failed',
            message: 'Internal server error'
        });
    }
}

const updateEducationContent = async (req, res) => {
    const {
        id
    } = req.params

    const {
        title,
        school,
        city,
        startDate,
        endDate,
    } = req.body;

    try {
        const education = await EducationModel.findById(id)

        console.log(education);

        if (!education) {
            return res.status(404).json({
                code: 404,
                status: 'failed',
                message: 'Education content not found'
            })
        }

        await EducationModel.updateOne({
            _id: id
        }, {
            $set: {
                title,
                school,
                city,
                startDate: new Date(startDate).toDateString(),
                endDate: new Date(endDate).toDateString(),
            }
        })

        res.status(200).json({
            code: 200,
            status: 'success',
            message: 'Education content has been successfully updated'
        })

    } catch (error) {
        res.status(500).json({
            code: 500,
            status: 'failed',
            message: 'Internal server error'
        });
    }
}


module.exports = {
    getEducationContent,
    postEducationContent,
    deleteEducationContent,
    updateEducationContent
}