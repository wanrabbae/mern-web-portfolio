const ExperienceModel = require('../models/ExperienceModel');

const getOneExperienceContent = async (req, res) => {
    const {
        id
    } = req.params;

    try {
        const experience = await ExperienceModel.findById(id);
        res.status(200).json({
            code: 200,
            status: 'success',
            data: experience
        });

    } catch (error) {
        res.status(500).json({
            code: 500,
            status: 'failed',
            message: 'Internal server error'
        });
    }
}

const getExperienceContent = async (req, res) => {
    const experience = await ExperienceModel.find()

    res.json({
        code: 200,
        status: 'success',
        data: experience
    });
}

const postExperienceContent = async (req, res) => {
    const {
        title,
        company,
        city,
        startDate,
        endDate,
        description,
        technologies
    } = req.body;

    const experience = new ExperienceModel({
        title,
        company,
        city,
        startDate: new Date(startDate).toDateString(),
        endDate: new Date(endDate).toDateString(),
        description,
        technologies
    });

    try {
        await experience.save();

        res.status(200).json({
            code: 200,
            status: 'success',
            message: 'Experience content has been successfully added',
            data: experience
        });
    } catch (error) {
        res.status(500).json({
            code: 500,
            status: 'failed',
            message: 'Internal server error'
        });
    }
}

const deleteExperienceContent = async (req, res) => {
    const {
        id
    } = req.params

    try {
        const experience = await ExperienceModel.findById(id)

        if (!experience) {
            return res.status(404).json({
                code: 404,
                status: 'failed',
                message: 'Experience content not found'
            })
        }

        await experience.remove()

        res.status(200).json({
            code: 200,
            status: 'success',
            message: 'Experience content has been successfully deleted'
        })

    } catch (error) {
        res.status(500).json({
            code: 500,
            status: 'failed',
            message: 'Internal server error'
        });
    }
}

const updateExperienceContent = async (req, res) => {
    const {
        id
    } = req.params

    const {
        title,
        company,
        city,
        startDate,
        endDate,
        description,
        technologies
    } = req.body;

    try {
        const experience = await ExperienceModel.findById(id)

        if (!experience) {
            return res.status(404).json({
                code: 404,
                status: 'failed',
                message: 'Experience content not found'
            })
        }

        const updatedExperience = {
            _id: id,
            title,
            company,
            city,
            startDate,
            endDate,
            description,
            technologies
        }

        await ExperienceModel.updateOne({
            _id: id
        }, {
            $set: {
                title,
                company,
                city,
                startDate: new Date(startDate).toDateString(),
                endDate: new Date(endDate).toDateString(),
                description,
                technologies
            }
        })

        res.status(200).json({
            code: 200,
            status: 'success',
            message: 'Experience content has been successfully updated',
            data: updatedExperience
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
    getOneExperienceContent,
    getExperienceContent,
    postExperienceContent,
    deleteExperienceContent,
    updateExperienceContent
}