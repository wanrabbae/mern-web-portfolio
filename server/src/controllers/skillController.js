const SkillModel = require('../models/SkillModel')

const getOneSkillContent = async (req, res) => {
    const {
        id
    } = req.params;

    try {
        const skill = await SkillModel.findById(id);
        res.status(200).json({
            code: 200,
            status: 'success',
            data: skill
        });

    } catch (error) {
        res.status(500).json({
            code: 500,
            status: 'failed',
            message: 'Internal server error'
        });
    }
}

const getSkillContent = async (req, res) => {
    const skill = await SkillModel.find()

    res.json({
        code: 200,
        status: 'success',
        data: skill
    });
}

const postSkillContent = async (req, res) => {
    const {
        languages,
        frontend,
        backend,
        tools
    } = req.body;

    const skill = new SkillModel({
        languages,
        frontend,
        backend,
        tools
    });

    try {
        await skill.save();

        res.status(200).json({
            code: 200,
            status: 'success',
            message: 'Skill content has been successfully added',
            data: skill
        });
    } catch (error) {
        res.status(500).json({
            code: 500,
            status: 'failed',
            message: 'Internal server error'
        });
    }
}

const deleteSkillContent = async (req, res) => {
    const {
        id
    } = req.params

    try {
        const skill = await SkillModel.findById(id)

        if (!skill) {
            return res.status(404).json({
                code: 404,
                status: 'failed',
                message: 'Skill content not found'
            })
        }

        await skill.remove()

        res.status(200).json({
            code: 200,
            status: 'success',
            message: 'Skill content has been successfully deleted'
        })

    } catch (error) {
        res.status(500).json({
            code: 500,
            status: 'failed',
            message: 'Internal server error'
        });
    }
}

const updateSkillContent = async (req, res) => {
    const {
        id
    } = req.params

    const {
        languages,
        frontend,
        backend,
        tools
    } = req.body;

    try {
        const skill = await SkillModel.findById(id)

        if (!skill) {
            return res.status(404).json({
                code: 404,
                status: 'failed',
                message: 'Skill content not found'
            })
        }

        const updatedSkill = {
            _id: id,
            languages,
            frontend,
            backend,
            tools
        }

        await SkillModel.updateOne({
            _id: id
        }, {
            $set: {
                languages,
                frontend,
                backend,
                tools
            }
        })

        res.status(200).json({
            code: 200,
            status: 'success',
            message: 'Skill content has been successfully updated',
            data: updatedSkill
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
    getOneSkillContent,
    getSkillContent,
    postSkillContent,
    deleteSkillContent,
    updateSkillContent
}